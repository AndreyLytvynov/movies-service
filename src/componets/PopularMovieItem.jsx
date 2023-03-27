import React from "react";
import { Flex } from "@chakra-ui/react";

const PopularMovieItem = ({ movie }) => {
  return (
    <Flex flexDirection={"column"} w={"300px"}>
      <h1>{movie.original_title}</h1>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
    </Flex>
  );
};

export default PopularMovieItem;
