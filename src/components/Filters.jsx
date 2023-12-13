import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { FilterLabel } from "../ui";
import { updateFilters } from "../redux/filtersSlice";
import { CustomSelect } from "./CustmSelect";
import price from "../data/price.json";
import label from "../data/filtersLable.json";

export const Filters = () => {
  const dispatch = useDispatch();
  const [carBrand, setCarBrand] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  return (
    <Formik
      initialValues={{
        from: "",
        to: "",
      }}
      onSubmit={(values) => {
        dispatch(
          updateFilters({ ...values, brand: carBrand, price: rentalPrice })
        );
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex justify-center items-end mb-[50px] mt-[150px] gap-x-[18px]">
            <div className="flex flex-col">
              <FilterLabel>{label.brand}</FilterLabel>
              <CustomSelect
                value={carBrand}
                setValue={setCarBrand}
                type="brand"
              />
            </div>
            <div className="flex flex-col">
              <FilterLabel>{label.hour}</FilterLabel>
              <CustomSelect
                data={price.array}
                weight="w-[125px]"
                label={`${[price.lable, label.dolar]}`}
                value={rentalPrice}
                setValue={setRentalPrice}
                type="price"
              />
            </div>
            <div className="flex flex-col">
              <FilterLabel>{label.mileage}</FilterLabel>
              <div className="flex">
                <div className="relative h-12">
                  <Field
                    name="from"
                    type="number"
                    className="cursor-pointer outline-none w-40 h-12 pl-[75px] py-[14px] bg-slate-50 rounded-tl-[14px] rounded-bl-[14px] border-r border-zinc-500 border-opacity-20"
                  ></Field>
                  <span className="absolute left-[24px] top-[14px] text-neutral-900 text-lg font-medium manrope leading-tight">
                    {label.from}
                  </span>
                </div>
                <div className="relative h-12">
                  <Field
                    name="to"
                    type="number"
                    className="cursor-pointer outline-none w-40 h-12 pl-[75px] relative bg-slate-50 rounded-tr-[14px] rounded-br-[14px]"
                  ></Field>
                  <span className="absolute left-[24px] top-[14px] text-neutral-900 text-lg font-medium manrope leading-tight">
                    {label.to}
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=" cursor-pointer w-[136px] h-12 px-11 py-3.5 bg-blue-500 rounded-xl justify-center items-center inline-flex text-white text-sm font-semibold manrope leading-tight"
            >
              Search
            </button>
            <button
              type="reset"
              onClick={() => {
                setCarBrand(""), setRentalPrice("");
              }}
              className=" cursor-pointer w-[136px] h-12 px-11 py-3.5 bg-blue-500 rounded-xl justify-center items-center inline-flex text-white text-sm font-semibold manrope leading-tight"
            >
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
