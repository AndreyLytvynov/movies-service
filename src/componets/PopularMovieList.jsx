import React from "react";
import PopularMovieItem from "./PopularMovieItem";
import { Flex } from "@chakra-ui/react";

const PopularMovieList = ({ movies }) => {
  return (
    <Flex flexWrap={"wrap"} gap={"10px"}>
      {movies &&
        movies.map((movie) => {
          return <PopularMovieItem key={movie.backdrop_path} movie={movie} />;
        })}
    </Flex>
  );
};

export default PopularMovieList;
