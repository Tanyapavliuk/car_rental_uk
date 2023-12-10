import line from "../assets/images/line.svg";

export const SubItem = ({ isLast = false, children }) => {
  return (
    <li className="leading-none flex gap-x-[6px]">
      <span className="text-neutral-900 text-opacity-50 text-xs font-normal manrope leading-[18px]">
        {children}
      </span>
      {!isLast && <img src={line} alt="line" width={1} height={16} />}
    </li>
  );
};
