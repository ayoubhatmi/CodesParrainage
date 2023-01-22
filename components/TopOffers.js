import OfferCard from "./OfferCard";
import Styles from "./TopOffers.module.scss";
import Link from "next/link";
import { topOffers } from "../data/topOffers";

const TopOffers = () => {
  return (
    <div className={Styles.topOffers}>
      <h2>Les plus populaires 🔥</h2>
      <div className={Styles.cardContainer}>
        {topOffers.map((offer, index) => (
          <OfferCard
            name={offer.name}
            offer={offer.offer}
            image={offer.logo}
            slug={offer.slug}
            key={index}
          />
        ))}
      </div>
      <Link href={"/offres-parrainage"} className={Styles.btn}>
        Voir toutes les offres
      </Link>
    </div>
  );
};

export default TopOffers;
