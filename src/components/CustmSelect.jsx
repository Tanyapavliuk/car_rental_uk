import { useState } from "react";
import arroy from "../assets/images/arroy.svg";
import makes from "../data/makes.json";
import { nanoid } from "nanoid";

export const CustomSelect = (height = null) => {
  const [brand, setBrand] = useState("");
  const [hiddenOptions, setHiddenOptions] = useState(true);
  return (
    <div
      className={`relative h-12 w-[224px] bg-slate-50 rounded-[14px] inline-flex items-center justify-between px-4`}
    >
      <p className="text-neutral-900 text-lg leading-5 font-medium manrope">
        {!brand ? "Enter the text" : brand}
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
        <div className="absolute top-[110%] left-0 py-[14px] px-[18px] bg-slate-50 rounded-[14px] h-[272px] w-56">
          <div className="h-[244px] overflow-auto scroll">
            <ul className="flex flex-col gap-2">
              {makes.map((el) => (
                <li
                  key={nanoid()}
                  name={el}
                  onClick={() => {
                    setBrand(el);
                    setHiddenOptions(true);
                  }}
                  className="cursor-pointer text-neutral-900 text-opacity-40 text-base font-medium manrope leading-tight hover:text-neutral-900 focus:text-neutral-900 active:text-neutral-900 bg-transparent"
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
