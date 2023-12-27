import BrandLink from "../BrankLink";
import CartIcon from "../Icons/CartIcon";
import HeartIcon from "../Icons/HeartIcon";
import Navlinks from "../NavLinks/Navlinks";

const Navbar = () => (
  <nav className='flex justify-between py-3 font-krona container mx-auto px-3'>
    <BrandLink />
    <div className='flex items-end'>
      <Navlinks />
      <div className='flex'>
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  </nav>
);
export default Navbar;
