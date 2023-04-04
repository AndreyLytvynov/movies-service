import { Route, Routes, Navigate } from "react-router-dom";

import Popular from "./pages/Popular/Popular";
import About from "./pages/About/About";
import Layout from "./componets/Layout";
import TopRating from "./pages/TopRating/TopRating";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Search from "./pages/Search/Search";
import NowPlaying from "./pages/NowPlaying/NowPlaying";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PrivateRoute from "./componets/Routs/PrivatRout";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/personal" element={<Favorites />} />
            <Route path="/personal/:id" element={<MovieDetails />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/popular/:id" element={<MovieDetails />} />
            <Route path="top-rating" element={<TopRating />} />
            <Route path="top-rating/:id" element={<MovieDetails />} />
            <Route path="now-playing" element={<NowPlaying />} />
            <Route path="now-playing/:id" element={<MovieDetails />} />
            <Route path="search" element={<Search />} />
            <Route path="search/:id" element={<MovieDetails />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to={"/popular"} replace />} />
      </Routes>
    </>
  );
}

export default App;
