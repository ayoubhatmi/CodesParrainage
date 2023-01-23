"use client";

import Styles from "./CategoryPage.module.scss";
import { categories } from "../../../data/categories";
import { usePathname } from "next/navigation";
import OfferCard from "../../../components/OfferCard";
import { offers } from "../../../data/offers";

const CategoryPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace("/categories/", "");

  const category = categories.find((item) => item.slug == slug);

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
