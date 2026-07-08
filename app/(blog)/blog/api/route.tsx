import { NextResponse } from "next/server";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postFields } from "@/sanity/lib/queries";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "0", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const tag_ = searchParams.get("tag") || "";

  // Compute the slice bounds in JS before building the query. GROQ slicing on
  // dynamic values can't be statically typed by Sanity TypeGen, so this query is
  // a plain runtime string (not wrapped in `defineQuery`) and is not type-checked.
  const start = page * limit;
  const end = start + limit;

  const query = `
    *[_type == "post" && defined(slug.current)]
    | order(date desc, _updatedAt desc)
    [${start}...${end}]
    { ${postFields} }
  `;

  const data = await sanityFetch({
    query,
    params: { tag_ },
    perspective: "published",
  });

  return NextResponse.json(data);
}
