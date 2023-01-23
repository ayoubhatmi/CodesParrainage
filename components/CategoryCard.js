"use client";

import Styles from "./CategoryCard.module.scss";
import { offers } from "../data/offers";
import { useRouter } from "next/navigation";

const CategoryCard = ({ name, logo, slug }) => {
  const router = useRouter();

  const HandelClick = () => {
    router.push("/categories/" + slug);
  };

  // Get number of available offers by category
  const offersCount = offers.filter((offer) => offer.category === name).length;

  return (
    <div className={Styles.categoryCard} onClick={HandelClick}>
      <div className={Styles.logo}>{logo}</div>
      <p className={Styles.name}>{name}</p>
      <p className={Styles.availableOffers}>{offersCount} offres</p>
    </div>
  );
};

export default CategoryCard;
