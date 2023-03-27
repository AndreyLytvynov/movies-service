import React from "react";
import PopularMovieList from "../../componets/PopularMovieList";
import { useGetMoviesQuery } from "../../redux/slice/movieSlice";

const Home = () => {
  const { data } = useGetMoviesQuery();
  console.log("dataRESULT", data);

  return <>{data && <PopularMovieList movies={data?.results} />}</>;
};

export default Home;
