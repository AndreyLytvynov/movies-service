import { Box } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../../componets/MovieList";

const Search = () => {
  const { state } = useLocation();

  return (
    <Box style={{ padding: "20px 0" }}>
      {state && <MovieList movies={state?.results} />}
    </Box>
  );
};

export default Search;
