import { NextResponse } from "next/server";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allpostsQuery, postFields } from "@/sanity/lib/queries";
import { defineQuery } from "next-sanity";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "0", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const tag_ = searchParams.get("tag") || "";

  const allpostsQuery = defineQuery(`
    *[_type == "post" && defined(slug.current)] 
    | order(date desc, _updatedAt desc) 
    [(${page} * ${limit})...((${page} + 1) * ${limit})] 
    { ${postFields} }
  `);

  const data = await sanityFetch({
    query: allpostsQuery,
    params: { tag_ },
    perspective: "published",
  });

  return NextResponse.json(data);
}
