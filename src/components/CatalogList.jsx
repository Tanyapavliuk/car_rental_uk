import { useEffect, useState } from "react";
import { CatalogItem } from "./CatalogItem";
import { Error } from "./Error";
import { useSelector, useDispatch } from "react-redux";
import { allCars } from "../redux/carsSlice";
import { LoaderCatalog } from "./LoaderCatalog";
import { fetchCars } from "../helpers/fetchCars";

export const CatalogList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const { cars } = useSelector((state) => state.cars);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        const data = await fetchCars(page);
        dispatch(allCars(data));
        setIsLoading(false);
      } catch (er) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchData();
  }, [page]);

  const updatedArray = () => {
    let newArrey = cars;
    if (filters.brand !== "") {
      newArrey = cars.filter((el) =>
        el.make.toLowerCase().includes(filters.brand.toLowerCase())
      );
      return newArrey;
    } else if (filters.price !== "") {
      newArrey = cars.filter((el) => {
        return +el.rentalPrice.substring(1) <= +filters.price;
      });
      return newArrey;
    } else {
      return newArrey;
    }
  };

  console.log(updatedArray());

  return (
    <div className="container mx-auto mb-[150px]">
      <ul className="flex flex-wrap gap-x-[29px] gap-y-[50px] mt-6 mb-6">
        {isLoading ? (
          <LoaderCatalog />
        ) : (
          updatedArray().map((el) => (
            <li key={el.id}>
              <CatalogItem data={el} />
            </li>
          ))
        )}
        {isError ? <Error /> : null}
      </ul>
      {!isLoading && cars.length >= 24 ? null : (
        <div className="flex justify-center mt-[100px]">
          <button
            onClick={() => setPage((state) => state + 1)}
            className="text-blue-500 text-base font-medium manrope underline leading-normal hover:text-blue-700 hover:underline "
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
