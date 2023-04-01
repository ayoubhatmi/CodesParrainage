import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function generateStaticParams() {
  const { items } = await client.getEntries({
    content_type: "blogPost",
  });

  return items.map((item) => ({
    slug: item.fields.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  const post = items[0].fields;
  return {
    title: post.title,
    description: post.title,
  };
}
export default async function OffreLayout({ children }) {
  return <section>{children}</section>;
}
