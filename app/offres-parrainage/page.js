import Styles from "./OffresParrainage.module.scss";
import OfferCard from "../../components/OfferCard";
import { offers } from "../../data/offers";

export const metadata = {
  title: "Offres de Parrainage",
  description:
    "Trouver top des offres de parrainage et des codes promo pour gagner de l'argent !",
};

const OffresParrainage = () => {
  return (
    <div className={Styles.offresPage}>
      <h2>Les offres de parrainage disponibles</h2>
      <div className={Styles.cardContainer}>
        {offers.map((offer, index) => (
          <OfferCard
            name={offer.name}
            offer={offer.offer}
            image={offer.logo}
            slug={offer.slug}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default OffresParrainage;
