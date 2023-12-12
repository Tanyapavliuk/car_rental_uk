import { CatalogList } from "../components";
import { Filters } from "../components";
import { CustomSelect } from "../components/CustmSelect";

export const Catalog = () => {
  return (
    <>
      <Filters />
      <CustomSelect />
      <CatalogList />
    </>
  );
};
