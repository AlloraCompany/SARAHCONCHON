import Link from "next/link";

import CoverImage from "./cover-image";
import DateComponent from "./date";

import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery } from "@/sanity/lib/queries";

export default async function LatestPosts(params: { limit: number }) {
  const data = await sanityFetch({
    query: moreStoriesQuery,
    params: { skip: "", ...params },
  });

  return (
    <>
      <div className="w-full mx-auto px-5 py-[4vh] gap-8 xl:gap-10 grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3">
        {data.map((item, ind) => (
          <Link key={ind} href={item.slug as string} className="group">
            <article className="flex basis flex-col">
              <div className="w-full aspect-video p-2 border border-white rounded-2xl">
                <div className="relative overflow-hidden size-full rounded-xl">
                  <CoverImage image={item.coverImage} priority={false} />
                  {/* <Image
                  src={item.cover_url}
                  alt={item.title}
                  fill
                  className="object-cover"
                /> */}
                </div>
              </div>
              <h3 className="mt-6 group-hover:underline font-medium leading-none text-[clamp(1.25rem,0.35rem+1.25vw,2rem)]">
                {item.title}
              </h3>
              <p className="mt-4 line-clamp-3 max-h-28 text-ellipsis">
                {item.excerpt}
              </p>
              <span className="uppercase underline mt-4 text-sm">
                Ler post completo {">"}
              </span>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}
