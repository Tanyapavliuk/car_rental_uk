import data from "../data/catalog.json";
export const LoaderCatalog = () => {
  return (
    <li className="w-full h-[800px]">
      <div className="w-full h-full bg-loading bg-contain bg-no-repeat bg-top ">
        <div className="h-[70px] flex justify-center items-end">
          <p className="text-red-700 text-4xl">{data.loading}</p>
          <div className="flex flex-row gap-2">
            <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-2 h-2 rounded-full bg-red-700 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      </div>
    </li>
  );
};
