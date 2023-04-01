import { offers } from "../../../data/offers";

export async function generateMetadata({ params }) {
  const offer = offers.find((offer) => offer.slug == params.slug);

  return {
    title: "Code Promo de Parrainage " + offer.name,
    description:
      "Trouvez le Code Promo de Parrainage " +
      offer.name +
      " - " +
      offer.RefereeRewards,
  };
}
export default async function OffreLayout({ children }) {
  return <section>{children}</section>;
}
