import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const PopularMovieItem = ({ movie }) => {
  const location = useLocation();
  return (
    <Link to={`${movie.id}`} state={{ location }}>
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
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : "https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg"
          }
          alt={movie.title}
        />
      </Flex>
    </Link>
  );
};

export default PopularMovieItem;
