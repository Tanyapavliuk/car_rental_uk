import { nanoid } from "nanoid";
import { Formik, Field, Form } from "formik";

import { FilterLabel } from "../ui";
import makes from "../data/makes.json";
import price from "../data/price.json";
import label from "../data/filtersLable.json";
import { useDispatch } from "react-redux";
import { updateFilters } from "../redux/filtersSlice";

export const Filters = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        brand: "",
        price: "",
        from: "",
        to: "",
      }}
      onSubmit={(values) => {
        dispatch(updateFilters(values));
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div className="flex justify-center items-end mb-[50px] mt-[150px] gap-x-[18px]">
            <div className="flex flex-col">
              <FilterLabel>{label.brand}</FilterLabel>
              <Field
                component="select"
                name="brand"
                className="py-[14px] px-[18px] outline-none bg-slate-50 rounded-[14px] cursor-pointer"
              >
                <option
                  value=""
                  key={nanoid()}
                  className="text-neutral-900 text-lg font-medium manrope leading-tight"
                >
                  Enter the text
                </option>
                {makes.map((el) => (
                  <option
                    key={nanoid()}
                    value={el.toLocaleLowerCase()}
                    className="text-neutral-900 text-opacity-20 text-base font-medium manrope leading-tight hover:text-neutral-900 focus:text-neutral-900 active:text-neutral-900 bg-transparent"
                  >
                    {el}
                  </option>
                ))}
              </Field>
            </div>
            <div className="flex flex-col">
              <FilterLabel>{label.hour}</FilterLabel>
              <div className="relative flex items-center gap-x-1 w-[125px] h-12">
                <p className="absolute left-4">{price.lable}</p>

                <Field
                  type="number"
                  name="price"
                  component="select"
                  className=" w-[125px] pl-[43px] py-[14px] bg-slate-50 rounded-[14px] outline-none  cursor-pointer manrope"
                >
                  <option
                    value=""
                    key={nanoid()}
                    className="text-neutral-900 text-lg font-medium manrope leading-tight"
                  ></option>
                  {price.array.map((el) => (
                    <option
                      key={nanoid()}
                      value={el}
                      className="text-neutral-900 text-opacity-20 text-base font-medium manrope leading-tight "
                    >
                      {el}
                    </option>
                  ))}
                </Field>
                {values.price === "" && (
                  <p className="absolute left-[47px] manrope">{label.dolar}</p>
                )}
                {values.price !== "" && (
                  <p className="absolute right-[45px] manrope">{label.dolar}</p>
                )}
              </div>
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
          </div>
        </Form>
      )}
    </Formik>
  );
};
