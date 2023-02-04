import Image from "next/image";
import Link from "next/link";
import Styles from "./Hero.module.scss";
import heroImg from "../images/hero-img.svg";

const Hero = () => {
  return (
    <section className={Styles.heroContainer}>
      <div className={Styles.desc}>
        <h2 className={Styles.title}>
          Top des offres de Parrainage en France.
        </h2>
        <p>Trouvez un filleul ou devenez parrain pour gagner de l'argent !</p>
        <Link href={"/offres-parrainage"} className={Styles.btn}>
          Voir les offres
        </Link>
      </div>
      <div className={Styles.imgContainer}>
        <Image src={heroImg} alt="" priority="true" />
      </div>
    </section>
  );
};

export default Hero;
