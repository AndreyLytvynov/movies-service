import { Box } from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import MovieList from "../../componets/MovieList";
import { useGetMoviesByNameQuery } from "../../redux/movieApi/movieSlice";

const Search = () => {
  const { state } = useLocation();
  const { data } = useGetMoviesByNameQuery(state);

  return <Box>{state && <MovieList movies={data?.results} />}</Box>;
};

export default Search;
