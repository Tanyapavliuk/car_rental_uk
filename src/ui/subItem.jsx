export const SubItem = ({ children }) => {
  return (
    <li className="leading-none">
      <span className="text-neutral-900 text-opacity-50 text-xs font-normal manrope leading-[18px]">
        {children}
      </span>
    </li>
  );
};
