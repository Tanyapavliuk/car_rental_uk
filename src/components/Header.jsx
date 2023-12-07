import { Link } from "react-router-dom";
import navigation from "../data/navigation.json";

export const Header = () => {
  return (
    <header className="h-16 flex items-center">
      <nav className="container mx-auto flex gap-5 justify-end items-center">
        {navigation.map(({ id, title, to }) => (
          <Link
            key={id}
            to={to}
            className="text-center text-neutral-50 text-base font-normal leading-normal"
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
