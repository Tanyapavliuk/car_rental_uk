import servises from "../data/servises.json";
import title from "../data/title.json";

export const Home = () => {
  return (
    <div className="w-full h-[900px] flex justify-start bg-hero bg-no-repeat bg-cover bg-top">
      <div className="w-full h-full bg-gradient-to-r from-gray-900/90 to-gray-800/50 ">
        <div className="container mx-auto h-full flex items-center">
          <h1 className=" text-gray-200 text-8xl font-medium leading-[128px]">
            {title.home}
          </h1>
          <ul className="flex flex-col gap-4">
            {servises.map(({ id, title }) => (
              <li key={id}>
                <button class="relative overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400/20 before:via-purple-400 before:to-indigo-400/70">
                  <span class="relative text-white font-bold px-8 py-8">
                    {title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
