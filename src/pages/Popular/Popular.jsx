import React from "react";
import MovieList from "../../componets/MovieList";
import { useGetPopularMoviesQuery } from "../../redux/slice/movieSlice";

const Popular = () => {
  const { data } = useGetPopularMoviesQuery();

  return (
    <div style={{ padding: "20px 0" }}>
      {data && <MovieList movies={data?.results} />}
    </div>
  );
};

export default Popular;
