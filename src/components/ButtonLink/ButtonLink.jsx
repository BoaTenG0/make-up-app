import { Link } from "react-router-dom";

export const ButtonLink = ({ path, text, isMain }) => (
  <Link
    to={path}
    className={`inline-block font-krona rounded-full text-xs ${
      isMain ? "bg-yellow py-4 px-10" : "bg-dark text-white py-2 px-4"
    }`}
  >
    {text}
  </Link>
);
