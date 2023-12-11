import { FilterLabel } from "../ui";
import makes from "../data/makes.json";
import { nanoid } from "nanoid";

export const Filters = () => {
  return (
    <div>
      <FilterLabel>Car brand</FilterLabel>
      <select name="brand">
        {makes.map((el) => (
          <option key={nanoid()} value={el.toLocaleLowerCase()}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};
