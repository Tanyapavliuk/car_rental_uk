import { useState } from "react";
import butonText from "../data/catalog.json";
import { CarInfo } from "./CarInfo";
import { createPortal } from "react-dom";
import hart from "../assets/images/heart.svg";
import hartActive from "../assets/images/heartActive.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../redux/favoriteSlice";

const modalRoot = document.querySelector("#modal-root");

export const CatalogItem = (data) => {
  const [showModal, setShowModal] = useState(false);
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = data.data;

  const location = address.split(",").splice(1, 2);

  const array = [
    location[0],
    location[1],
    rentalCompany,
    type,
    model,
    id,
    accessories[0],
  ];
  return (
    <div className="w-[274px] h-[426px] relative">
      <img
        src={favorites.some((item) => item.id === id) ? hartActive : hart}
        w={18}
        h={18}
        className="absolute top-[14px] right-[14px] cursor-pointer"
        onClick={() => {
          const isFavorite = favorites.some((item) => item.id === id);
          console.log(isFavorite);
          if (isFavorite) {
            dispatch(removeFavorites(id));
          } else {
            dispatch(addFavorites(data.data));
          }
        }}
      />
      <div className="w-[270px] h-[268px]">
        <img
          src={img}
          alt={model}
          className="rounded-[14px] object-cover h-full w-full"
        />
      </div>
      <div className="mt-[14px]">
        <div className="flex justify-between items-center mb-2 whitespace-nowrap">
          <h2 className="text-neutral-900 text font-normal manrope leading-normal">
            {make}
            <span className="text-blue-500"> {model}</span>, {year}
          </h2>
          <p className="text-neutral-900 text-base font-medium manrope leading-normal">
            {rentalPrice}
          </p>
        </div>
        <div className="mb-6 inline-flex gap-x-[6px] gap-y-1 flex-wrap h-[40px] overflow-y-clip">
          {array.map((el, index, arr) => (
            <span
              key={index}
              className={`text-neutral-900 text-opacity-50 text-xs font-normal manrope leading-[18px] ${
                index === arr.length - 1
                  ? "overflow-clip w-[120px] truncate h-[18px]"
                  : ""
              }`}
            >
              {el}
            </span>
          ))}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer w-full h-11 flex justify-center py-3 bg-blue-500 rounded-xl items-center text-white text-sm font-semibold manrope leading-tight hover:bg-blue-700 outline-none"
        >
          {butonText.more}
        </button>
        {showModal
          ? createPortal(
              <CarInfo
                onClose={() => setShowModal(false)}
                id={id}
                data={data}
              />,
              modalRoot
            )
          : null}
      </div>
    </div>
  );
};
