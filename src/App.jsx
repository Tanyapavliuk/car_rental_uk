import { Route, Routes } from "react-router-dom";
import { Catalog, Favorites, Home, Root } from "./screen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<p>Error</p>} />
    </Routes>
  );
};

export default App;
