import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import MovieList from "../../componets/MovieList";
import { useGetMoviesByNameQuery } from "../../redux/movieApi/movieSlice";
import MovieListSkelet from "../../componets/Loaders/MovieListSkelet";

const Search = () => {
  const { state } = useLocation();
  const { data, isLoading } = useGetMoviesByNameQuery(state);

  return (
    <Box>
      {isLoading ? <MovieListSkelet /> : <MovieList movies={data?.results} />}
    </Box>
  );
};

export default Search;
