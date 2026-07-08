import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import { Inter, Cormorant_Garamond, Lora } from "next/font/google";
import { draftMode } from "next/headers";

import AlertBanner from "./alert-banner";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Header from "./header";
import Footer from "./footer";
import { Physician, WithContext } from "schema-dts";
import { SettingsQueryResult } from "@/sanity.types";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

async function generateSchema(
  settings: SettingsQueryResult
): Promise<WithContext<Physician>> {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dra. Sarah Conchon",
    description:
      "Médica pediatra e endocrinologista, dedicada à oferecer um cuidado afetuoso, técnico e transformador para cada criança e sua família.",
    medicalSpecialty: ["Pediatric", "Endocrine"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "CRM",
        identifier: "36824",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "RQE",
        identifier: "19614",
      },
    ],
    image: resolveOpenGraphImage(settings?.ogImage)?.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. 1129, n 695 - St. Marista",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      postalCode: "74175-140",
      addressCountry: "BR",
    },
    telephone: "+55 62 99660-7583",
    url: "https://sarahconchon.com",
    openingHours: "Mo-Fr 08:00-18:00",
    sameAs: [
      "https://g.co/kgs/cQbYMqR",
      "https://www.instagram.com/sarahconchon/",
      "http://lattes.cnpq.br/5989133149728771",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Consulta Presencial",
      },
      {
        "@type": "MedicalProcedure",
        name: "Consulta Online",
      },
      {
        "@type": "MedicalProcedure",
        name: "Visita Hospitalar",
      },
    ],
    knowsAbout: [
      "Crescimento Infantil",
      "Puberdade",
      "Obesidade Infantil",
      "Diabetes Infantil e Juvenil",
      "Tireoide na Infância",
      "Síndromes Genéticas",
      "Distúrbios da Diferenciação Sexual (DDS)",
    ],
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await sanityFetch({ query: settingsQuery });
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html
      lang="en"
      className={`${lora.variable} ${cormorant.variable} ${inter.variable} scroll-smooth bg-white text-black`}
    >
      <GoogleTagManager gtmId={process.env.GTM_ID || ""} />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(await generateSchema(data)).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
        <Header />
        <section className="min-h-screen font-sans">
          {isDraftMode && <AlertBanner />}
          <main>{children}</main>
        </section>
        <Footer />
        {isDraftMode && <VisualEditing />}
        <SpeedInsights />
      </body>
    </html>
  );
}
