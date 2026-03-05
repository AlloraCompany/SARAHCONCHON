"use client";
import Link from "next/link";

import CoverImage from "../cover-image";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MoreStoriesQueryResult } from "@/sanity.types";
import { LoaderCircle } from "lucide-react";
// import { useSearchParams } from "next/navigation";

export default function PostList() {
  const params = useSearchParams();
  const [posts, setPosts] = useState<MoreStoriesQueryResult>([]);
  const [page, setPage] = useState(0);
  const limit = 9;
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch(`/blog/api?page=${page}&limit=${limit}`, {
      next: {
        revalidate: 60,
      },
    });
    const newPosts = await res.json();
    if (page) {
      setPosts((prev: any) => [...prev, ...newPosts]);
    } else {
      setPosts(newPosts);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLoadMore = () => setPage((prev) => prev + 1);
  return (
    <div className="w-full mx-auto pb-[4vh] gap-8 xl:gap-10 grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3">
      {posts.map((item, ind) => (
        <Link key={ind} href={item.slug as string} className="group">
          <article className="flex basis flex-col text-dark-green">
            <div className="w-full aspect-video p-2  border border-rose rounded-2xl">
              <div className="relative overflow-hidden size-full rounded-xl">
                <CoverImage image={item.coverImage} priority={false} />
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
      {loading && <LoaderCircle className="animate-spin" />}
    </div>
  );
}
