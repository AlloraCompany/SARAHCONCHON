import { defineQuery } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import CoverImage from "../cover-image";
import DateComponent from "../date";
import MoreStories from "../more-stories";
import PortableText from "../portable-text";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { BlogPosting, WithContext } from "schema-dts";
import { PostQueryResult, SettingsQueryResult } from "@/sanity.types";

type Props = {
  params: Promise<{ slug: string }>;
};

const postSlugs = defineQuery(
  `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`
);

export async function generateStaticParams() {
  return await sanityFetch({
    query: postSlugs,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await sanityFetch({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

async function generateSchema({
  post,
  settings,
}: {
  post: PostQueryResult;
  settings: SettingsQueryResult;
}): Promise<WithContext<BlogPosting>> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post?.title,
    image: urlForImage(post?.coverImage)
      ?.height(1000)
      .width(2000)
      .url() as string,
    author: {
      "@type": "Person",
      name: "Dra. Sarah Conchon",
    },
    publisher: {
      "@type": "Organization",
      name: "Dra. Sarah Conchon",
    },
    datePublished: post?.date,
    dateModified: post?.date,
    description: post?.excerpt || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://sarahconchon.com/" + post?.slug,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
    sanityFetch({ query: settingsQuery }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5 pb-[8vh] flex flex-col lg:flex-row gap-5 xl:gap-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            await generateSchema({ post, settings })
          ).replace(/</g, "\\u003c"),
        }}
      />
      <article className="basis-2/3 pt-5">
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden">
          <CoverImage image={post.coverImage} priority />
        </div>
        <h1 className=" w-full text-dark-green my-[4vh] text-[clamp(1.25rem,0.55rem+1.75vw,2.75rem)] font-bold leading-none">
          {post.title}
        </h1>
        <div className="w-full my-5 flex justify-start text-rose items-center gap-1">
          <hr className="border-rose/30 w-5" />
          <Calendar className="stroke-rose" size={18} />
          <DateComponent dateString={post.date} />
          <hr className="border-rose/30 w-full" />
        </div>
        {post.content?.length && (
          <PortableText
            className="max-w-full text-[clamp(0.75rem,0.55rem+1.75vw,1.25rem)]"
            value={post.content as PortableTextBlock[]}
          />
        )}
      </article>
      <hr className="border-dark-green/30" />
      <aside className="basis-1/3 sticky top-20 sm:top-24 h-fit pt-5">
        <h2 className=" text-dark-green leading-none text-[clamp(1.25rem,0.55rem+1.75vw,2.75rem)] font-semibold">
          Tags
        </h2>
        <hr className="border-dark-green/30 my-4" />
        <ul className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag, ind) => (
            <li
              key={ind}
              className="px-2 py-1 rounded-md bg-rose text-white font-semibold"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h2 className=" text-dark-green leading-none text-[clamp(1.25rem,0.55rem+1.75vw,2.75rem)] font-semibold">
          Mais recentes
        </h2>
        <hr className="border-dark-green/30 my-4" />
        <Suspense>
          <MoreStories skip={post._id} limit={3} />
        </Suspense>
        <div className="mt-4 w-full flex justify-end">
          <Link href="/blog" className="text-rose font-medium hover:underline">
            Ver mais -&gt;
          </Link>
        </div>
      </aside>
    </div>
  );
}
