"use client";

import Image from "next/image";
import Styles from "./OfferCard.module.scss";
import { useRouter } from "next/navigation";

const OfferCard = ({ name, offer, image, slug }) => {
  const router = useRouter();

  const HandelClick = () => {
    router.push("/offres-parrainage/" + slug);
  };

  return (
    <div className={Styles.offerCard} onClick={HandelClick}>
      <div className={Styles.logoContainer}>
        <Image className={Styles.logo} src={image} alt="" />
      </div>
      <p className={Styles.name}>{name}</p>
      <p className={Styles.offer}>{offer}</p>
    </div>
  );
};

export default OfferCard;
