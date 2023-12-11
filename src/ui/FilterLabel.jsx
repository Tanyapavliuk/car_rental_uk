export const FilterLabel = ({ className = "", children }) => {
  return (
    <h3
      className={`text-zinc-500 text-sm font-medium manrope leading-[18px] mb-2 ${className}`}
    >
      {children}
    </h3>
  );
};
