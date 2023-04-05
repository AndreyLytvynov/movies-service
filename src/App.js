import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "./componets/Routs/PrivatRout";
import PublicRouts from "./componets/Routs/PublicRouts";

const Layout = lazy(() => import("./componets/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Popular = lazy(() => import("./pages/Popular/Popular"));
const TopRating = lazy(() => import("./pages/TopRating/TopRating"));
const NowPlaying = lazy(() => import("./pages/NowPlaying/NowPlaying"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Search = lazy(() => import("./pages/Search/Search"));

function App() {
  return (
    <>
      <Suspense fallback={false}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<PublicRouts />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
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
          </Route>
          <Route path="*" element={<Navigate to={"/popular"} replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
