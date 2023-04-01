import Styles from "./CategoryPage.module.scss";
import { categories } from "../../../data/categories";
import OfferCard from "../../../components/OfferCard";
import { offers } from "../../../data/offers";

export async function generateMetadata({ params }) {
  const category = categories.find((item) => item.slug == params.slug);

  return {
    title: category.name,
    description:
      "Découvrez les meilleures offres de parrainage pour la catégorie " +
      category.name,
  };
}

const CategoryPage = ({ params }) => {
  const category = categories.find((item) => item.slug == params.slug);

  const offersByCategory = offers.filter(
    (offer) => offer.category == category.name
  );

  return (
    <div className={Styles.categoryPage}>
      <h2>
        Les offres de parrainage disponibles pour la catégorie
        <span> {category.name}</span>
      </h2>

      <div className={Styles.cardContainer}>
        {offersByCategory.length == 0 ? (
          <p>Aucune offre n'est disponible pour le moment 😞</p>
        ) : (
          offersByCategory.map((offer, index) => (
            <OfferCard
              name={offer.name}
              offer={offer.offer}
              image={offer.logo}
              slug={offer.slug}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
