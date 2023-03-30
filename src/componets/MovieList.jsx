import React from "react";
import MovieItem from "./MovieItem";
import { Flex } from "@chakra-ui/react";

const MovieList = ({ movies, nameLength }) => {
  return (
    <Flex flexWrap={"wrap"} gap={"20px"}>
      {movies &&
        movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
    </Flex>
  );
};

export default MovieList;
