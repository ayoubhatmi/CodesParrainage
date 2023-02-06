"use client";

import { usePathname } from "next/navigation";
import { offers } from "../../../data/offers";

export default function Head() {
  const pathname = usePathname();
  const slug = pathname.replace("/offres-parrainage/", "");
  const offer = offers.find((offer) => offer.slug == slug);

  return (
    <>
      <title>{"Code Promo de Parrainage " + offer.name}</title>
      <meta
        name="description"
        content={
          "Code Promo de Parrainage " +
          offer.name +
          " - " +
          offer.RefereeRewards
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
