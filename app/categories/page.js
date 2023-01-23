import Styles from "./CategoriesPage.module.scss";
import { categories } from "../../data/categories";
import CategoryCard from "../../components/CategoryCard";

const page = () => {
  return (
    <div className={Styles.categoriesPageContainer}>
      <h2>Liste des offres par catégories</h2>
      <div className={Styles.cardContainer}>
        {categories.map((item, index) => (
          <CategoryCard
            key={index}
            name={item.name}
            logo={item.logo}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
