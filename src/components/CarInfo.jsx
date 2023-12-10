import { ModalTitle, SubItem } from "../ui";
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

  return (
    <div className="fixed w-screen h-screen top-0 bg-neutral-900 bg-opacity-50 flex justify-center items-center">
      <div className="relative w-[541px] h-[752px] bg-white rounded-3xl flex flex-col items-center">
        <button
          className="absolute top-4 right-4 hover:scale-150"
          onClick={onClose}
        >
          <span className="text-3xl hover:text-red-700">&#215;</span>
        </button>
        <div className="w-[461px]">
          <div className="mt-10">
            <img
              className="rounded-xl"
              src={img}
              alt={model}
              width={461}
              height={248}
            />
            <h2 className="text-black text font-normal manrope leading-normal mt-3">
              {make}
              <span className="text-red-500"> {model}</span>, {year}
            </h2>
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              <SubItem>{location[0]}</SubItem>
              <SubItem>{location[1]}</SubItem>
              <SubItem>
                {details.id}: {id}
              </SubItem>
              <SubItem>
                {details.year}: {year}
              </SubItem>
              <SubItem>
                {details.type}: {type}
              </SubItem>
              <SubItem>
                {details.fuel}: {fuelConsumption}
              </SubItem>
              <SubItem>
                {details.engine}: {engineSize}
              </SubItem>
            </ul>
            <ModalTitle className="font-normal mt-[14px]">
              {description}
            </ModalTitle>
            <ModalTitle className="font-medium mt-6">
              {details.functionalities}
            </ModalTitle>
            <div className="h-10 overflow-y-auto mt-2">
              <ul className="flex flex-wrap gap-x-3">
                {accessories.map((el) => (
                  <SubItem key={el}>{el}</SubItem>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-x-3">
                {functionalities.map((el) => (
                  <SubItem key={el}>{el}</SubItem>
                ))}
              </ul>
            </div>
            <ModalTitle className="font-medium mt-6">
              {details.rental}
            </ModalTitle>
          </div>
        </div>
      </div>
    </div>
  );
};
