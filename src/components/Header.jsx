import { Link } from "react-router-dom";
import navigation from "../data/navigation.json";
import logoText from "../data/logo.json";
import logo from "../assets/images/logo.webp";

export const Header = () => {
  return (
    <header className="h-16 shadow-md shadow-red-500 relative">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Link to="/">
            <img src={logo} width={48} height={48} />
          </Link>
          <p className="text-neutral-50 text-2xl font-normal leading-norma manrope smOnly:hidden">
            {logoText.logo}
          </p>
        </div>
        <nav className="flex gap-5 items-center">
          {navigation.map(({ id, title, to }) => (
            <Link
              key={id}
              to={to}
              className="text-center text-neutral-50 text-base font-normal leading-normal manrope smOnly:text-sm"
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
