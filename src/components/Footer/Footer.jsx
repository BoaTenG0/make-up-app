import { Link } from "react-router-dom";
import BrandLink from "../BrankLink";
import links from "../data/footerLinks.json";

const Navbar = () => {
  // const Links = ["About", "Skincare", "Makeup", "Supplements", "Contacts"];
  return (
    <footer className='bg-dark text-light flex justify-between px-8 py-3'>
      <BrandLink classes={"text-yellow"} />
      <div className='flex justify-between mx-auto'>
        {links.map((item) => (
          <div className='flex flex-col flex-wrap mr-10' key={item.title}>
            <h6 className='font-krona text-sm'>{item.title}</h6>
            {item.links.map((link) => (
              <Link to={link.link} className=''>
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Navbar;

{
  /* <div className='flex justify-between '>
        <div>
          {Links.map((link) => (
            <Link className='ml-4'>{link}</Link>
          ))}
        </div>
      </div> */
}
