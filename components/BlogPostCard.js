"use client";

import Image from "next/image";
import Styles from "./BlogPostCard.module.scss";
import { useRouter } from "next/navigation";

const BlogPostCard = ({ image, title, date, slug }) => {
  const router = useRouter();

  const HandelClick = () => {
    router.push("/blog/" + slug);
  };

  return (
    <div className={Styles.BlogPostCard} onClick={HandelClick}>
      <Image
        className={Styles.image}
        src={"http:" + image.fields.file.url}
        width={350}
        height={150}
        alt=""
      />
      <h2 className={Styles.title}>{title}</h2>
      <p className={Styles.date}>{date}</p>
    </div>
  );
};

export default BlogPostCard;
