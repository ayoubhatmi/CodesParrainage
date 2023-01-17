import Link from "next/link";
import Styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={Styles.hero}>
      <h1 className={Styles.title}>
        Codes<span>Parrainage</span>
      </h1>
      <p>Top des offres de Parrainage en France.</p>
      <p>Trouvez un filleul ou devenez parrain pour gagner de l'argent !</p>
      <Link href={"/offres-parrainage"} className={Styles.btn}>
        Voir les offres
      </Link>
    </section>
  );
};

export default HeroSection;
