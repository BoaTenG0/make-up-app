import { ButtonLink } from "../ButtonLink/ButtonLink";
import bannerImg from "../../assets/harper.jpg";
import "./SecondaryBanner.css";
const SecondaryBanner = () => {
  return (
    <div className='banner_secondary container mx-auto bg-pink h-64 flex items-center justify-between p-20 w-11/12 rounded-3xl'>
      <div className='p-4'>
        <h1 className='font-krona w-36 tracking-wide mb-12'>
          Be natural, be beautiful, be you.
        </h1>
        <ButtonLink path={"/about"} text={"see more"} />
      </div>
      <img src={bannerImg} className='w-2/5 h-52 rounded-3xl' alt='bannerImg' />
    </div>
  );
};
export default SecondaryBanner;
