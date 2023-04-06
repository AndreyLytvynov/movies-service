import React from "react";
import { Flex } from "@chakra-ui/react";
import MovieItemSkelet from "./MovieItemSkelet";

const MovieListSkelet = () => {
  return (
    <Flex
      flexWrap={"wrap"}
      gap={"20px"}
      justifyContent={"center"}
      bg={"white"}
      p={"15px 0"}
      minH={"95vh"}
    >
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <MovieItemSkelet key={index} />
        ))}
    </Flex>
  );
};

export default MovieListSkelet;
