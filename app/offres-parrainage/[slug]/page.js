"use client";

import Image from "next/image";
import styles from "./OfferDetails.module.scss";
import Link from "next/link";
import { offers } from "../../../data/offers";
import { usePathname } from "next/navigation";
import giftImg from "../../../images/gift-bag.svg";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import OfferCard from "../../../components/OfferCard";

const OfferDetails = () => {
  const pathname = usePathname();
  const slug = pathname.replace("/offres-parrainage/", "");
  const offer = offers.find((offer) => offer.slug == slug);
  const [active, setActive] = useState(true);

  const HandelCopy = () => {
    copy(offer.referralCode);
    setActive(!active);
  };

  const similarOffers = offers
    .filter((off) => off.category == offer.category && off.name != offer.name)
    .slice(0, 3);

  return (
    <div className={styles.OfferDetailsPage}>
      <h2 className={styles.header}>Code Promo de Parrainage {offer.name}</h2>

      <div className={styles.descriptionContainer}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={offer.logo} alt="" />
        </div>
        <div>
          <h2> {offer.name}</h2>
          <p className={styles.text}>{offer.description}</p>
        </div>
      </div>

      <div className={styles.avantagesContainer}>
        <Image src={giftImg} className={styles.giftImg} alt="" />
        <div>
          <h2>Avantages en utilisant le parrainage {offer.name}</h2>
          <p className={styles.text}>{offer.RefereeRewards} </p>
        </div>
      </div>

      <div className={styles.promoContainer}>
        <div className={styles.codeContainer}>
          <h2>Notre code Promo :</h2>
          {offer.referralCode ? (
            <p className={styles.code}>{offer.referralCode}</p>
          ) : null}
        </div>

        <div className={styles.codeContainer}>
          {offer.referralLink && !offer.referralCode ? (
            <div className={styles.horizontalContainer}>
              <Link
                href={offer.referralLink}
                target="_blank"
                className={styles.button}
              >
                <span className={styles.button__text}>
                  Accès direct au promo
                </span>
                <span className={styles.button__icon}>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </div>
          ) : null}
          {offer.referralCode && offer.referralLink ? (
            <>
              <div className={styles.horizontalContainer}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={HandelCopy}
                >
                  <span className={styles.button__text}>
                    {active ? "Copier" : "Copié !"}
                  </span>
                  <span className={styles.button__icon}>
                    <MdContentCopy />
                  </span>
                </button>
              </div>
              <div className={styles.horizontalContainer}>
                <Link
                  href={offer.referralLink}
                  target="_blank"
                  className={styles.button}
                >
                  <span className={styles.button__text}>
                    Accès direct au promo
                  </span>
                  <span className={styles.button__icon}>
                    <HiOutlineExternalLink />
                  </span>
                </Link>
              </div>
            </>
          ) : null}
        </div>

        <p className={styles.instruction}>
          <span> Instruction :</span> Pour profiter de cette offre de parrainage
          vous devez copier le code ci-dessus à coller dans le formulaire
          d'inscription ou cliquer sur le lien ci-dessus afin de vous inscrire
          directement.
        </p>
      </div>

      {similarOffers.length ? (
        <div className={styles.similarOffers}>
          <h2 className={styles.similarOffersHeader}>
            Autres offres dans la catégorie {offer.category}
          </h2>
          <div className={styles.cardContainer}>
            {similarOffers.map((offer, index) => (
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
      ) : null}
    </div>
  );
};

export default OfferDetails;
