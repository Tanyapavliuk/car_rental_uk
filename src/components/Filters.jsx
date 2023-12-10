import { FilterLabel } from "../ui";
import makes from "../data/makes.json";

export const Filters = () => {
  return (
    <div>
      <FilterLabel>Car brand</FilterLabel>
      <select name="brand">
        {makes.map((el) => (
          <option value={el.toLocaleLowerCase()}>{el}</option>
        ))}
      </select>
    </div>
  );
};
