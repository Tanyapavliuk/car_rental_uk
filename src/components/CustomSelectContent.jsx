import PropTypes from "prop-types";
import { nanoid } from "nanoid";

export const CustomSelectContent = ({ data, setValue, setHiddenOptions }) => {
  console.log(data);
  return (
    <div className="z-10 absolute top-[110%] left-0 py-[14px] px-[18px] bg-slate-50 rounded-[14px] h-[272px] w-full">
      <div className="h-[244px] overflow-auto scroll">
        <ul className="flex flex-col gap-2">
          {data.map((el) => (
            <li
              key={nanoid()}
              name={el}
              onClick={() => {
                setValue(el);
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
  );
};

CustomSelectContent.propTypes = {
  data: PropTypes.array,
  setValue: PropTypes.func.isRequired,
  setHiddenOptions: PropTypes.func.isRequired,
};
