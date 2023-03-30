import React from "react";
import { useGetTopMoviesQuery } from "../../redux/slice/movieSlice";
import MovieList from "../../componets/MovieList";
import { Box } from "@chakra-ui/react";

const Movies = () => {
  const { data } = useGetTopMoviesQuery();
  return (
    <Box style={{ padding: "20px 0" }}>
      {data && <MovieList movies={data?.results} />}
    </Box>
  );
};

export default Movies;
