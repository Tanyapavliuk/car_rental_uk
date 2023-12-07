import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const Root = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className=""></footer>
    </div>
  );
};
