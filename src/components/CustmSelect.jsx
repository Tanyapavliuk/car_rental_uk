import PropTypes from "prop-types";
import { useState } from "react";
import arroy from "../assets/images/arroy.svg";
import makes from "../data/makes.json";
import { CustomSelectContent } from "./CustomSelectContent";

export const CustomSelect = ({
  label = "Enter the text",
  data = makes,
  height = "h-12",
  weight = "w-[224px]",
  value,
  setValue,
  type,
}) => {
  const [hiddenOptions, setHiddenOptions] = useState(true);

  const isValuePrice = () => {
    if (type === "brand") return;
    else if (!value) {
      const array = label.split(",");
      const noValue = [array[0], " ", array[1]];
      return noValue;
    } else {
      const array = label.split(",");
      const input = `${array[0]} ${value} ${array[1]}`;
      return input;
    }
  };

  const labelBrand = !value ? label : value;
  let labelPrice = isValuePrice();

  return (
    <div
      className={`relative ${height} ${weight} bg-slate-50 rounded-[14px] inline-flex items-center justify-between px-4`}
    >
      <p className="text-neutral-900 text-lg leading-5 font-medium manrope">
        {type === "brand" ? labelBrand : labelPrice}
      </p>
      <div onClick={() => setHiddenOptions(!hiddenOptions)}>
        <img
          src={arroy}
          width={20}
          height={20}
          className={`${
            hiddenOptions ? "" : "rotate-180"
          } transition-transform duration-400 ease-in`}
        />
      </div>
      {!hiddenOptions && (
        <CustomSelectContent
          data={data}
          setValue={setValue}
          setHiddenOptions={setHiddenOptions}
        />
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
  height: PropTypes.string,
  weight: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
