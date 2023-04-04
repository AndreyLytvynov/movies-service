import React from "react";
import { useGetFavoriteQuery } from "../../redux/movieCastomApi/movieCastomSlice";
import MovieList from "../../componets/MovieList";
import { Box } from "@chakra-ui/react";

const Favorites = () => {
  const { data } = useGetFavoriteQuery();
  return (
    <>
      <Box>{data && <MovieList movies={data?.data} />}</Box>
    </>
  );
};

export default Favorites;
