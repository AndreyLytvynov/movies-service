import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PopularMovieItem = ({ movie }) => {
  return (
    <Link to={`${movie.id}`}>
      <Flex
        flexDirection={"column"}
        w={"300px"}
        boxShadow={"mainShadow"}
        _hover={{ transform: "scale(1.04)" }}
        borderRadius={"sm"}
        p={"10px"}
      >
        <Heading as="h1" size="md" noOfLines={2} h={"50px"}>
          {movie.original_title}
        </Heading>
        <Image
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </Flex>
    </Link>
  );
};

export default PopularMovieItem;
