"use client";

import Image from "next/image";
import Styles from "./PostCard.module.scss";
import { useRouter } from "next/navigation";

const PostCard = ({ image, title, date, slug }) => {
  const router = useRouter();

  const HandelClick = () => {
    router.push("/blog/" + slug);
  };

  return (
    <div className={Styles.postCard} onClick={HandelClick}>
      <Image
        className={Styles.image}
        src={"http:" + image.fields.file.url}
        width={350}
        height={150}
      />
      <h2 className={Styles.title}>{title}</h2>
      <p className={Styles.date}>{date}</p>
    </div>
  );
};

export default PostCard;
