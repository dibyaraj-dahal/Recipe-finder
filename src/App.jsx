import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import MainLayout from "./components/layouts/MainLayout";
import Favourites from "./pages/Favourites";

import RecipieDetails from "./pages/RecipieDetails";
function App() {
  return (
    <BrowserRouter>

      

      <Routes>
          <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/favourites"
          element={<Favourites />}
        />
        <Route
        path="/recipe/:id"
        element={<RecipieDetails />}
        />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
