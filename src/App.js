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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Navigate to={"/popular"} />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/popular/:id" element={<MovieDetails />} />
          <Route path="top-rating" element={<TopRating />} />
          <Route path="top-rating/:id" element={<MovieDetails />} />
          <Route element={<PrivateRoute />}>
            <Route path="now-playing" element={<NowPlaying />} />
            <Route path="now-playing/:id" element={<MovieDetails />} />
          </Route>
          {/* <Route path="now-playing" element={<NowPlaying />} /> */}
          {/* <Route path="now-playing/:id" element={<MovieDetails />} /> */}
          <Route path="search" element={<Search />} />
          <Route path="search/:id" element={<MovieDetails />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to={"/popular"} replace />} />
      </Routes>
    </>
  );
}

export default App;
