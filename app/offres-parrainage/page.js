import Styles from "./OffresParrainage.module.scss";
import OfferCard from "../../components/OfferCard";
import { offers } from "../../data/offers";

const OffresParrainage = () => {
  return (
    <div className={Styles.offresPage}>
      <h1 className={Styles.header}>Les offres de parrainage disponibles</h1>
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
