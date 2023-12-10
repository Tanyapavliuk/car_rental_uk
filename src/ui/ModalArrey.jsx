import { SubItem } from "./index";

export const ModalArrey = ({ array }) => {
  return (
    <ul className="flex flex-wrap gap-x-[6px]">
      {array.map((el, ind, arr) => (
        <SubItem key={el} isLast={ind === arr.length - 1 ? true : false}>
          {el}
        </SubItem>
      ))}
    </ul>
  );
};
