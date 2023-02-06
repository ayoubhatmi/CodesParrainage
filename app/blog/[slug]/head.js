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

export default async function Head({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  const post = items[0].fields;

  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
