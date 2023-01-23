import CategoryCard from "./CategoryCard";
import Styles from "./DiscoverCategories.module.scss";
import { categories } from "../data/categories";
import Link from "next/link";

const DiscoverCategories = () => {
  //show only 5 categories in the home page
  const homePageCategories = categories.slice(0, 5);

  return (
    <div className={Styles.discoverCategories}>
      <h2>Découvrez par catégorie</h2>
      <div className={Styles.cardContainer}>
        {homePageCategories.map((item, index) => (
          <CategoryCard
            key={index}
            name={item.name}
            logo={item.logo}
            slug={item.slug}
          />
        ))}
      </div>
      <Link href={"/categories"} className={Styles.btn}>
        Voir plus
      </Link>
    </div>
  );
};

export default DiscoverCategories;
