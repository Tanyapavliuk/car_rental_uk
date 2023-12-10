import { nanoid } from "nanoid";
import details from "../data/details.json";
export const RentalList = ({ data }) => {
  const { rentalConditions, mileage, rentalPrice } = data;
  const updateList = () => {
    const update = rentalConditions
      .split("\n")
      .map((el) => (el.indexOf(":") !== -1 ? el.split(":") : el));
    return [
      ...update,
      [details.mileage, mileage],
      [details.price, rentalPrice],
    ];
  };

  return (
    <ul className="flex flex-wrap gap-2">
      {updateList().map((el) =>
        Array.isArray(el) ? (
          <li key={nanoid()} className="py-[7px] px-[14px]">
            {el.map((el, index) => (
              <span
                key={nanoid()}
                className={` ${
                  index !== 0 ? "text-blue-500 " : "text-neutral-700"
                }  text-xs manrope leading-[18px] font-normal`}
              >
                {el}
              </span>
            ))}
          </li>
        ) : (
          <li className="py-[7px] px-[14px]" key={nanoid()}>
            <p className="text-neutral-700 text-xs font-normal  manrope leading-[18px]">
              {el}
            </p>
          </li>
        )
      )}
    </ul>
  );
};
