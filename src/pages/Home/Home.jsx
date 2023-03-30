import React from "react";
import MovieList from "../../componets/MovieList";
import { useGetMoviesQuery } from "../../redux/slice/movieSlice";

const Home = () => {
  const { data } = useGetMoviesQuery();

  return (
    <div style={{ padding: "20px 0" }}>
      {data && <MovieList movies={data?.results} />}
    </div>
  );
};

export default Home;
