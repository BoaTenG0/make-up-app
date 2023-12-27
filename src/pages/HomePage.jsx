import Banner from "../components/Banner";
import TopProducts from "../components/TopProducts/TopProducts";
// import SecondaryBanner from "../components/secondaryBanner/SecondaryBanner";
import SellingPoint from "../components/SellingPoint/SellingPoint";
import Benefits from "../components/Benefits/Benefits";

const HomePage = () => {
  return (
    <>
      <Banner />
      <TopProducts />
      {/* <SecondaryBanner /> */}
      <SellingPoint />
      <Benefits />
    </>
  );
};
export default HomePage;
