import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = Omit<LinkProps, "href"> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
  };

export default async function CTAButton(props: CTAButtonProps) {
  const settings = await sanityFetch({ query: settingsQuery });

  const { children, ...linkProps } = props;

  return (
    <Link
      href={`https://wa.me/${settings?.whatsapp_number}?text=${settings?.whatsapp_message}`}
      target="_blank"
      {...linkProps}
    >
      {children}
    </Link>
  );
}
