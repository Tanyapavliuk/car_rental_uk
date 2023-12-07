import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";

import { Home, Catalog, Favorites, Error } from "./screen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;
