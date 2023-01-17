"use client";

import Image from "next/image";
import Styles from "./OfferDetails.module.scss";
import Link from "next/link";
import { offers } from "../../../data/offers";
import { AiFillGift } from "react-icons/ai";
import { usePathname } from "next/navigation";

const OfferDetails = () => {
  const pathname = usePathname();
  const slug = pathname.replace("/offres-parrainage/", "");
  const offer = offers.find((offer) => offer.slug == slug);

  return (
    <div className={Styles.OfferDetailsPage}>
      <div className={Styles.container}>
        <div className={Styles.horizontalContainer}>
          {/* <Image className={Styles.logo} src={offer.logo} /> */}
          <div className={Styles.logoContainer}>
            <Image className={Styles.logo} src={offer.logo} />
          </div>
          <h1 className={Styles.header}>Parrainage {offer.name}</h1>
        </div>
        <p className={Styles.text}>{offer.description}</p>
        <div className={Styles.subheader}>
          <AiFillGift className={Styles.icon} />
          <h2>Avantages parrain :</h2>
        </div>

        <p className={Styles.text}>{offer.ReferrerRewards} </p>
        <div className={Styles.subheader}>
          <AiFillGift className={Styles.icon} />
          <h2>Avantages filleul :</h2>
        </div>
        <p className={Styles.text}>{offer.RefereeRewards} </p>

        {offer.referralCode ? (
          <div className={Styles.subheader}>
            <h2>
              Code promo : <span>{offer.referralCode}</span>
            </h2>
          </div>
        ) : null}

        {offer.referralLink ? (
          <div>
            <Link
              href={offer.referralLink}
              target="_blank"
              className={Styles.btn}
            >
              Accès direct au promo
            </Link>
          </div>
        ) : null}

        <p className={Styles.instruction}>
          <span> Instruction :</span> Pour profiter de cette offre de parrainage
          vous devez copier le code ci-dessous à coller dans le formulaire
          d'inscription ou cliquer sur le lien ci-dessous afin de vous inscrire
          directement.
        </p>

        {offer.detailsLink ? (
          <Link
            target="_blank"
            href={offer.detailsLink}
            className={Styles.link}
          >
            voir plus de détails sur l'offre
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default OfferDetails;
