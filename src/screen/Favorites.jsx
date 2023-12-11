import { useSelector } from "react-redux";
import { CatalogItem } from "../components/CatalogItem";
import { Error } from "../components/Error";
import { useEffect, useState } from "react";

export const Favorites = () => {
  const [isNoFavorite, setIsNoFavorite] = useState(true);
  const { favorites } = useSelector((state) => state.favorites);
  useEffect(() => {
    if (favorites.length !== 0) {
      setIsNoFavorite(false);
    } else {
      setIsNoFavorite(true);
    }
  }, [favorites]);

  return (
    <div>
      <ul className="container mx-auto my-[50px] flex gap-6 flex-wrap">
        {!isNoFavorite && favorites.map((el) => <CatalogItem data={el} />)}
      </ul>
      {isNoFavorite && (
        <div className="flex flex-col  items-center">
          <h2 className="text-5xl mb-6">Add your favorite cars</h2>
          <Error />
        </div>
      )}
    </div>
  );
};
