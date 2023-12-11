import { Link } from "react-router-dom";
import { Error } from "../components/Error";
export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center py-[50px]">
      <h1 className="text-5xl">404</h1>
      <h2 className="text-2xl mb-6">Not found page</h2>
      <Error />
      <Link
        to="/"
        className="cursor-pointer text-neutral-900 text-3xl font-normal manrope leading-normal mt-3 hover:text-blue-500"
      >
        go home
      </Link>
    </div>
  );
};
