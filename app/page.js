import DiscoverCategories from "../components/DiscoverCategories";
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import MosaicBgSection from "../components/MosaicBgSection";
import TopOffers from "../components/TopOffers";

const Page = () => {
  return (
    <>
      <Hero />
      <TopOffers />
      <DiscoverCategories />
      <LatestArticles />
      <MosaicBgSection />
    </>
  );
};

export default Page;
