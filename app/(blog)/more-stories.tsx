import Link from "next/link";

import CoverImage from "./cover-image";
import DateComponent from "./date";

import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery } from "@/sanity/lib/queries";
import { Calendar } from "lucide-react";

export default async function MoreStories(params: {
  skip: string;
  limit: number;
}) {
  const data = await sanityFetch({ query: moreStoriesQuery, params });

  return (
    <>
      <div className="w-full mx-auto gap-4 flex flex-col">
        {data.map((item, ind) => (
          <Link key={ind} href={item.slug as string} className="group">
            <article className="flex basis flex-row gap-4">
              <div className="basis-1/4 md:basis-1/5 lg:basis-1/3 xl:basis-1/4 aspect-square p-2 border border-rose rounded-2xl">
                <div className="relative overflow-hidden size-full rounded-xl">
                  <CoverImage image={item.coverImage} priority={false} />
                </div>
              </div>
              <div className="basis-3/4 md:basis-4/5 lg:basis-2/3 xl:basis-3/4 flex flex-col py-5 justify-between">
                <h3 className="line-clamp-2 text-dark-green group-hover:text-rose group-hover:underline font-semibold leading-none text-[clamp(1rem,0.55rem+1.5vw,1.25rem)]">
                  {item.title}
                </h3>
                {/* <p className=" line-clamp-2 text-sm">{item.excerpt}</p> */}
                <div className="w-full flex justify-start text-rose items-center gap-1">
                  <Calendar className="stroke-rose" size={18} />
                  <DateComponent dateString={item.date} />
                </div>
                {/* <span className="uppercase underline mt-4 text-sm">
                  Ler post completo {">"}
                </span> */}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}
