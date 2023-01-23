import Styles from "./LatestArticles.module.scss";
import { createClient } from "contentful";
import PostCard from "./PostCard";

const LatestArticles = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const { items } = await client.getEntries({
    content_type: "blogPost",
  });

  // get 3 latest articles.
  const latestArticles = items.slice(0, 3);

  return (
    <div className={Styles.latestArticles}>
      <h2>Nos derniers articles</h2>
      <div className={Styles.cardContainer}>
        {latestArticles.map((item) => (
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
};

export default LatestArticles;
