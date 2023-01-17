import Link from "next/link";
import Styles from "./Footer.module.scss";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={Styles.Footer}>
      <div className={Styles.listContainer}>
        <ul className={Styles.list}>
          <li className={Styles.listHeader}>À propos</li>
          <li className={Styles.listItem}>
            <Link href={"/contact"}>Contactez-nous</Link>
          </li>
        </ul>
        <ul className={Styles.list}>
          <li className={Styles.listHeader}>Sur le site</li>
          <li className={Styles.listItem}>
            <Link href={"/offres-parrainage"}>Offres de parrainage</Link>
          </li>
          <li className={Styles.listItem}>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>

        <ul className={Styles.list}>
          <li className={Styles.listHeader}>Suivez-Nous</li>
          <li>
            <Link
              className={Styles.socialMediaLink}
              target="_blank"
              href="https://www.facebook.com/"
            >
              <FaFacebookSquare />
            </Link>
          </li>
        </ul>
      </div>

      <p className={Styles.copyright}>
        CodesParrinage | tous droits réservés © 2023
      </p>
    </footer>
  );
};

export default Footer;
