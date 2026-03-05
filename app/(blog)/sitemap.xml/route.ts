import { sanityFetch } from "@/sanity/lib/fetch"; // ajuste o caminho conforme sua estrutura
import { postSlugsQuery } from "@/sanity/lib/queries";

export async function GET() {
  const posts = await sanityFetch({
    query: postSlugsQuery,
    perspective: "published",
    stega: false,
  });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarahconchon.com";

  const urls = posts
    .map(
      (post: { slug: string | null; _updatedAt: string }) => `
    <url>
      <loc>${baseUrl}/${post.slug}</loc>
      <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  >
    ${urls}
    <url>
      <loc>${baseUrl}/blog</loc>
      <lastmod>2025-05-01</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${baseUrl}/consultas</loc>
      <lastmod>2025-05-01</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>2025-05-01</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
