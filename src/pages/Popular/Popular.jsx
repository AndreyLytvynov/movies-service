import React from "react";
import MovieList from "../../componets/MovieList";
import { useGetPopularMoviesQuery } from "../../redux/movieApi/movieSlice";
import { Box } from "@chakra-ui/react";
import MovieListSkelet from "../../componets/Loaders/MovieListSkelet";

const Popular = () => {
  const { data, isLoading } = useGetPopularMoviesQuery();
  return (
    <Box>
      {isLoading ? <MovieListSkelet /> : <MovieList movies={data?.results} />}
    </Box>
  );
};

export default Popular;
