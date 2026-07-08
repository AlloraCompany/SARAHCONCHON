import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

export const postSlugsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`
);

export const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  tags,
  coverImage,
  "date": coalesce(date, _updatedAt),
`;

export const heroQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
    content,
    ${postFields}
  }
`);

export const moreStoriesQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

// GROQ slicing must use constant numbers for Sanity TypeGen to generate types.
// Pagination is handled at the fetch layer (see app/(blog)/blog/api/route.tsx).
export const allpostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(date desc, _updatedAt desc)
  [0...12]
  { ${postFields} }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content,
    ${postFields}
  }
`);
