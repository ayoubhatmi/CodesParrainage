import styles from "./MosaicBgSection.module.scss";
import mosaicImg from "../images/mosaic-bg.png";
import Image from "next/image";

const MosaicBgSection = () => {
  return (
    <div className={styles.mosaicBgSection}>
      <Image src={mosaicImg} />
    </div>
  );
};

export default MosaicBgSection;
