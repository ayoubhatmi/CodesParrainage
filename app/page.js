import DiscoverCategories from "../components/DiscoverCategories";
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import TopOffers from "../components/TopOffers";

const Page = () => {
  return (
    <>
      <Hero />
      <TopOffers />
      <DiscoverCategories />
      <LatestArticles />
    </>
  );
};

export default Page;
