import servises from "../data/servises.json";
import title from "../data/title.json";

export const Home = () => {
  return (
    <div className="w-full min-h-min flex justify-start bg-main bg-contain smOnly:bg-cover smOnly:bg-left-bottom bg-no-repeat bg-top">
      <div className="container mx-auto h-full  flex smOnly:flex-col smOnly:gap-16 md:justify-between pt-16">
        <div>
          <h1 className=" text-gray-900 text-5xl font-medium leading-[100px] smOnly:leading-[50px]">
            {title.home}
          </h1>
          <h2 className=" text-gray-900 text-xl font-normal">
            {title.home_subtitle}
          </h2>
          {/* <div>
            <img src={bg} />
          </div> */}
        </div>

        <ul className="md:w-3/6 xl:w-2/6 flex flex-col gap-4">
          {servises.map(({ id, title }) => (
            <li
              key={id}
              className="cursor-pointer text-white font-semibold bg-gradient-to-r from-red-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-300 hover:text-white hover:border-gray-800 hover:from-black hover:to-blue-700"
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
