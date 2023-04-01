import React from "react";
import MovieList from "../../componets/MovieList";
import { useGetNowPlayingMoviesQuery } from "../../redux/movieApi/movieSlice";

const NowPlaying = () => {
  const { data } = useGetNowPlayingMoviesQuery();

  return (
    <div style={{ padding: "20px 0" }}>
      {data && <MovieList movies={data?.results} />}
    </div>
  );
};

export default NowPlaying;
