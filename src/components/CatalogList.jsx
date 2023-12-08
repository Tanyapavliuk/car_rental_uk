import { useEffect, useState } from "react";
import axios from "axios";
import data from "../data/catalog.json";
import { CatalogItem } from "./CatalogItem";
import { Error } from "./Error";
import { useSelector, useDispatch } from "react-redux";
import { allCars } from "../redux/carsSlice";

export const CatalogList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        const response = await axios.get(
          "https://6573288d192318b7db41a7b3.mockapi.io/api/v1/adverts"
        );
        dispatch(allCars(response.data));
        setIsLoading(false);
      } catch (er) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <ul className="flex flex-wrap gap-x-[29px] gap-y-[50px] mt-6 mb-6">
        {isLoading ? (
          <li className="w-full h-[800px]">
            <div className="w-full h-full bg-loading bg-contain bg-no-repeat bg-top ">
              <div className="h-[70px] flex justify-center items-end">
                <p className="text-red-700 text-4xl">{data.loading}</p>
                <div className="flex flex-row gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            </div>
          </li>
        ) : (
          cars.map((el) => (
            <li key={el.id}>
              <CatalogItem data={el} />
            </li>
          ))
        )}
        {isError ? <Error /> : null}
      </ul>
    </div>
  );
};
