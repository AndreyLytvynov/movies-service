import React from "react";
import { useGetTopMoviesQuery } from "../../redux/movieApi/movieSlice";
import MovieList from "../../componets/MovieList";
import { Box } from "@chakra-ui/react";

const TopRating = () => {
  const { data } = useGetTopMoviesQuery();
  return <Box>{data && <MovieList movies={data?.results} />}</Box>;
};

export default TopRating;
