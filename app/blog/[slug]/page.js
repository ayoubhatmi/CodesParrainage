import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Styles from "./BlogPostPage.module.scss";

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

const BolgPostPage = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  const post = items[0].fields;

  return (
    <div className={Styles.bolgPostPage}>
      <div className={Styles.container}>
        <Image
          src={"http:" + post.image.fields.file.url}
          className={Styles.img}
          width={852}
          height={480}
        />
        <h2 className={Styles.title}>{post.title}</h2>
        <p className={Styles.date}>{post.date}</p>
        <div className={Styles.text}>
          {documentToReactComponents(post.text)}
        </div>
      </div>
    </div>
  );
};

export default BolgPostPage;
