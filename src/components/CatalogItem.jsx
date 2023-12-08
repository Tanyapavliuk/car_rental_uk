import { useState } from "react";
import butonText from "../data/catalog.json";
import { CarInfo } from "./CarInfo";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export const CatalogItem = (data) => {
  const [showModal, setShowModal] = useState(false);
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
    <div className="w-[274px] h-[426px]">
      <div className="w-[270px] h-[268px]">
        <img src={img} alt={model} className="object-cover h-full w-full" />
      </div>
      <div className="mt-[14px]">
        <div className="flex justify-between items-center mb-2 whitespace-nowrap">
          <h2 className="text-white text font-normal manrope leading-normal">
            {make}
            <span className="text-red-500"> {model}</span>, {year}
          </h2>
          <p className="text-white text-base font-medium manrope leading-normal">
            {rentalPrice}
          </p>
        </div>
        <div className="mb-6 inline-flex gap-x-3 gap-y-1 flex-wrap h-[40px] overflow-y-clip">
          {array.map((el, index, arr) => (
            <span
              key={index}
              className={`text-white text-opacity-50 text-xs font-normal manrope leading-[18px] ${
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
          className="cursor-pointer text-white font-semibold bg-gradient-to-r from-red-800 to-black w-full py-2 rounded-full border border-gray-600 hover:scale-105 duration-300 hover:text-white hover:border-gray-800 hover:from-black hover:to-yellow-700"
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
