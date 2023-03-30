import {
  Route,
  Routes,
  // Navigate
} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./componets/Layout";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/Movies/MovieDetails";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:id" element={<MovieDetails />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Route>
        {/* <Route path="*" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
