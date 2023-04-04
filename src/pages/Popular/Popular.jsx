import React from "react";
import MovieList from "../../componets/MovieList";
import { useGetPopularMoviesQuery } from "../../redux/movieApi/movieSlice";
import { Box } from "@chakra-ui/react";

const Popular = () => {
  const { data } = useGetPopularMoviesQuery();

  return <Box>{data && <MovieList movies={data?.results} />}</Box>;
};

export default Popular;
