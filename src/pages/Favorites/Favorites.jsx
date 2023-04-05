import React from "react";
import { useGetFavoriteQuery } from "../../redux/movieCastomApi/movieCastomSlice";
import MovieList from "../../componets/MovieList";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Favorites = () => {
  const { data } = useGetFavoriteQuery();
  return (
    <>
      <Box>
        {data?.data?.length !== 0 ? (
          <MovieList movies={data?.data} />
        ) : (
          <Flex flexDirection={"column"} p={"15px 10px"} minH={"95vh"}>
            <Heading as="h1" size="lg">
              Welcome to your personal movie page!
            </Heading>
            <Text>
              There are currently no movies added, but feel free to add your
              favorite movies and create a collection that is unique to you. We
              can't wait to see what you choose to share with us!
            </Text>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default Favorites;
