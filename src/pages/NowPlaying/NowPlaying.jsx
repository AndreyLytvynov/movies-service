import React from "react";
import MovieList from "../../componets/MovieList";
import { useGetNowPlayingMoviesQuery } from "../../redux/movieApi/movieSlice";
import { Box } from "@chakra-ui/react";
import MovieListSkelet from "../../componets/Loaders/MovieListSkelet";

const NowPlaying = () => {
  const { data, isLoading } = useGetNowPlayingMoviesQuery();

  return (
    <Box>
      {isLoading ? <MovieListSkelet /> : <MovieList movies={data?.results} />}
    </Box>
  );
};

export default NowPlaying;
