import { NavLink } from "react-router-dom";
const LINKS = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/search",
    name: "Search",
  },
  {
    path: "/about",
    name: "About",
  },
];
const Navlinks = () => {
  return (
    <>
      {LINKS.map((link, index) => (
        <NavLink
          activeclassname='text-yellow'
          to={link.path}
          className='mr-8  text-sm'
          key={`${link.name}-${index}`}
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};
export default Navlinks;

{
  /* <NavLink to='/search' className='mr-8  text-sm'>
  Search
</NavLink>
<NavLink to='/about' className='mr-8  text-sm'>
  About
</NavLink> */
}
