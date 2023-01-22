import { createClient } from "contentful";
import PostCard from "../../components/PostCard";
import Styles from "./BlogPage.module.scss";

export default async function BlogPage() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const { items } = await client.getEntries({
    content_type: "blogPost",
  });

  return (
    <div className={Styles.blogPageContainer}>
      <h2>Bienvenue sur notre blog !</h2>
      <div className={Styles.cardContainer}>
        {items.map((item) => (
          <PostCard
            key={item.sys.id}
            title={item.fields.title}
            image={item.fields.image}
            date={item.fields.date}
            slug={item.fields.slug}
          />
        ))}
      </div>
    </div>
  );
}
