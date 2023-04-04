import React from "react";
import MovieList from "../../componets/MovieList";
import { useGetNowPlayingMoviesQuery } from "../../redux/movieApi/movieSlice";
import { Box } from "@chakra-ui/react";

const NowPlaying = () => {
  const { data } = useGetNowPlayingMoviesQuery();

  return <Box>{data && <MovieList movies={data?.results} />}</Box>;
};

export default NowPlaying;
