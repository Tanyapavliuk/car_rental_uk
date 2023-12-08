// import axios from "axios";
// import { useEffect } from "react";
import { SubItem } from "../ui";
import details from "../data/details.json";

export const CarInfo = ({ id, onClose, data }) => {
  const {
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = data.data;

  const location = address.split(",").splice(1, 2);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await axios.get(
  //           `https://6573288d192318b7db41a7b3.mockapi.io/api/v1/adverts/${id}`
  //         );
  //         console.log(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //     fetchData();
  //   }, []);
  return (
    <div className="fixed w-screen h-screen top-0 bg-neutral-900 bg-opacity-50 flex justify-center items-center">
      <div className="relative w-[541px] h-[752px] bg-white rounded-3xl flex flex-col items-center">
        <button
          className="absolute top-4 right-4 hover:scale-150"
          onClick={onClose}
        >
          <span className="text-3xl hover:text-red-700">&#215;</span>
        </button>
        <div className="mt-12">
          <img
            className="rounded-xl"
            src={img}
            alt={model}
            width={469}
            height={314}
          />
          <h2 className="text-black text font-normal manrope leading-normal mt-3">
            {make}
            <span className="text-red-500"> {model}</span>, {year}
          </h2>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 w-[277px]">
            <li>
              <SubItem>{location[0]}</SubItem>
            </li>
            <li>
              <SubItem>{location[1]}</SubItem>
            </li>
            <li>
              <SubItem>
                {details.id}: {id}
              </SubItem>
            </li>
            <li>
              <SubItem>
                {details.year}: {year}
              </SubItem>
            </li>
            <li>
              <SubItem>
                {details.type}: {type}
              </SubItem>
            </li>
            <li>
              <SubItem>
                {details.fuel}: {fuelConsumption}
              </SubItem>
            </li>
            <li>
              <SubItem>
                {details.engine}: {engineSize}
              </SubItem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
