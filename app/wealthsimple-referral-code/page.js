"use client";

import Image from "next/image";
import styles from "./OfferDetails.module.scss";
import Link from "next/link";
import giftImg from "../../images/gift-bag.svg";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import WealthsimpleLogo from "../../images/wealthsimple-logo.png";

const OfferDetails = () => {
  const [activeCopyBtn, setActiveCopyBtn] = useState(true);
  const OFFER = {
    name: "Wealthsimple",
    logo: WealthsimpleLogo,
    slug: "wealthsimple-referral-code",
    category: "Cryptomonnaie",
    description:
      "Wealthsimple, also known as Wealthsimple Invest is one of the products Wealthsimple offers, along with Crypto, Cash, and Trade. Wealthsimple is Canada's largest robo advisor it includes features such as no-minimum investments, a highly-rated app, very low fees, and open access to financial advisors on-demand.",
    detailsLink: "",
    referralLink:
      "https://my.wealthsimple.com/app/public/trade-referral-signup?code=LDDW7G",
    referralCode: "LDDW7G",
    ReferrerRewards:
      "12€ en bon d'achat pour toute commande réalisée par le filleul sur une vente privée d'un montant minimum de 50€, hors frais de port + 10€ supplémentaires au bout de 5 parrainages", //Avantages parrain
    RefereeRewards: "Get between $5 and $3,000 in cash to invest! ", //Avantages filleul
  };

  const HandelCopy = () => {
    copy(OFFER.referralCode);
    setActiveCopyBtn(!activeCopyBtn);
  };

  // Get 3 similar offers from same category.
  // const similarOffers = offers
  //   .filter((off) => off.category == OFFER.category && off.name != OFFER.name)
  //   .slice(0, 3);

  return (
    <div className={styles.OfferDetailsPage}>
      <h2 className={styles.header}>
        Wealthsimple Free Bonus on first time sign-up
      </h2>

      <div className={styles.promoContainer}>
        <div className={styles.codeContainer}>
          <h2>Code Promo :</h2>
          {OFFER.referralCode ? (
            <p className={styles.code}>{OFFER.referralCode}</p>
          ) : null}
        </div>

        <div className={styles.codeContainer}>
          {OFFER.referralLink && !OFFER.referralCode ? (
            <div className={styles.horizontalContainer}>
              <Link
                href={OFFER.referralLink}
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
          {OFFER.referralCode && OFFER.referralLink ? (
            <>
              <div className={styles.horizontalContainer}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={HandelCopy}
                >
                  <span className={styles.button__text}>
                    {activeCopyBtn ? "Copy" : "Copied!"}
                  </span>
                  <span className={styles.button__icon}>
                    <MdContentCopy />
                  </span>
                </button>
              </div>
              <div className={styles.horizontalContainer}>
                <Link
                  href={OFFER.referralLink}
                  target="_blank"
                  className={styles.button}
                >
                  <span className={styles.button__text}>
                    Direct access to promotion
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
          <span> Instruction :</span> To take advantage of this sponsorship
          offer, you must copy the code above to paste into the registration
          form or click on the link above to register directly.
        </p>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={OFFER.logo} alt="" />
        </div>
        <div>
          <h2> {OFFER.name}</h2>
          <p className={styles.text}>{OFFER.description}</p>
        </div>
      </div>

      <div className={styles.avantagesContainer}>
        <Image src={giftImg} className={styles.giftImg} alt="" />
        <div>
          <h2>{OFFER.name} Referral Reward on first time sign-up</h2>
          <p className={styles.text}>{OFFER.RefereeRewards} </p>
        </div>
      </div>
      {/* 
      {similarOffers.length ? (
        <div className={styles.similarOffers}>
          <h2 className={styles.similarOffersHeader}>
            Autres offres dans la catégorie {OFFER.category}
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
      ) : null} */}
    </div>
  );
};

export default OfferDetails;
