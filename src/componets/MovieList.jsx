import React from "react";
import MovieItem from "./MovieItem";
import { Flex } from "@chakra-ui/react";
import MovieItemSkelet from "./Loaders/MovieItemSkelet";

const MovieList = ({ movies }) => {
  return (
    <Flex
      flexWrap={"wrap"}
      gap={"20px"}
      justifyContent={"center"}
      bg={"white"}
      p={"15px 0"}
      minH={"95vh"}
    >
      {movies
        ? movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })
        : Array(20)
            .fill(0)
            .map((_, index) => <MovieItemSkelet key={index} />)}
    </Flex>
  );
};

export default MovieList;
