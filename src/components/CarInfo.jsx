import { ModalTitle, SubItem } from "../ui";
import details from "../data/details.json";
import { ModalArrey } from "../ui/ModalArrey";
import { RentalList } from "../ui/RentalList";
import { useEffect, useState } from "react";
import { fetchOneCar } from "../helpers/fetchOneCar";

export const CarInfo = ({ id, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [carInfo, setCarInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const car = await fetchOneCar(id);

        setCarInfo(car);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="fixed w-screen h-screen top-0 bg-neutral-900 bg-opacity-50 flex justify-center items-center">
      <div className="relative w-[541px] h-[752px] bg-white rounded-3xl flex flex-col items-center">
        <button
          className="absolute top-4 right-4 hover:scale-150"
          onClick={onClose}
        >
          <span className="text-3xl hover:text-blue-500">&#215;</span>
        </button>
        {!isLoading && (
          <div className="w-[461px]">
            <div className="mt-10">
              <div className="w-[461px] h-[248px] overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover object-center"
                  src={carInfo.img}
                  alt={carInfo.model}
                />
              </div>
              <h2 className="text-neutral-900 text font-normal manrope leading-normal mt-3">
                {carInfo.make}
                <span className="text-blue-500"> {carInfo.model}</span>,{" "}
                {carInfo.year}
              </h2>
              <ul className="flex flex-wrap gap-x-[6px] gap-y-1">
                <SubItem>{carInfo.address.split(",").splice(1, 2)[0]}</SubItem>
                <SubItem>{carInfo.address.split(",").splice(1, 2)[1]}</SubItem>
                <SubItem>
                  {details.id}: {carInfo.id}
                </SubItem>
                <SubItem>
                  {details.year}: {carInfo.year}
                </SubItem>
                <SubItem>
                  {details.type}: {carInfo.type}
                </SubItem>
                <SubItem>
                  {details.fuel}: {carInfo.fuelConsumption}
                </SubItem>
                <SubItem isLast={true}>
                  {details.engine}: {carInfo.engineSize}
                </SubItem>
              </ul>
              <ModalTitle className="font-normal mt-[14px]">
                {carInfo.description}
              </ModalTitle>
              <ModalTitle className="font-medium mt-6">
                {details.functionalities}
              </ModalTitle>
              <div className="h-10 overflow-y-auto mt-2">
                <ModalArrey array={carInfo.accessories} />
                <ModalArrey array={carInfo.functionalities} />
              </div>
              <ModalTitle className="font-medium mt-6">
                {details.rental}
              </ModalTitle>
              <RentalList
                data={{
                  rentalConditions: carInfo.rentalConditions,
                  mileage: carInfo.mileage,
                  rentalPrice: carInfo.rentalPrice,
                }}
              />
              <a
                href={`tel:${details.phone}`}
                className="mt-6 w-[168px] h-11 px-[50px] py-3 bg-blue-500 rounded-xl justify-center items-center inline-flex text-white text-sm font-semibold manrope leading-tight hover:bg-blue-700 focus:bg-blue-700"
              >
                {details.butnTex}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
