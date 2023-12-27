import { ButtonLink } from "../ButtonLink/ButtonLink";
import bannerImg from "../../assets/harper-sunday.jpg";

function Banner() {
  return (
    <div className='container mx-auto flex items-center px-20 py-5'>
      <div className='p-4'>
        <h1 className='font-krona text-3xl w-96 tracking-wide mb-4'>
          The new lineup you'll swear by for dullness, dryness and breakouts.
        </h1>
        <p className='text-sm mb-10'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          eligendi aperiam, recusandae harum iusto molestias doloremque placeat
          quaerat ullam ipsa officiis.
        </p>
        <ButtonLink path={"/about"} text={"see more"} isMain />
      </div>
      <img src={bannerImg} className='w-full rounded-3xl' alt='bannerImg' />
    </div>
  );
}
export default Banner;
