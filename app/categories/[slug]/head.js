"use client";

import { usePathname } from "next/navigation";
import { categories } from "../../../data/categories";

export default function Head() {
  const pathname = usePathname();
  const slug = pathname.replace("/categories/", "");
  const category = categories.find((item) => item.slug == slug);

  return (
    <>
      <title>{"Offres pour la catégorie " + category.name}</title>
      <meta
        name="description"
        content={
          "Trouver des offres de parrainage et des codes promo de la catégorie " +
          category.name
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
