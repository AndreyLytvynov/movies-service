import React from "react";
import { useGetTopMoviesQuery } from "../../redux/movieApi/movieSlice";
import MovieList from "../../componets/MovieList";
import { Box } from "@chakra-ui/react";
import MovieListSkelet from "../../componets/Loaders/MovieListSkelet";
const TopRating = () => {
  const { data, isLoading } = useGetTopMoviesQuery();
  return (
    <Box>
      {isLoading ? <MovieListSkelet /> : <MovieList movies={data?.results} />}
    </Box>
  );
};

export default TopRating;
