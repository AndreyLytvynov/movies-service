import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMoviesByIdQuery } from "../../redux/movieApi/movieSlice";
import {
  useCurrentFavoriteQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from "../../redux/movieCastomApi/movieCastomSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const { data } = useGetMoviesByIdQuery(id);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { currentData } = useCurrentFavoriteQuery(id);
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  console.log(useCurrentFavoriteQuery(id));

  const addToFavorite = async () => {
    await addFavorite(data);
  };

  const removeToFavorite = async () => {
    await deleteFavorite(id);
  };

  return (
    <>
      {data && (
        <Box>
          <Button onClick={goBack}>Go back</Button>
          <Flex>
            <Image
              src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
              alt={data.original_title}
            />
            <Flex w={600} flexDirection={"column"} p={5}>
              <Heading as="h1" size="md" noOfLines={2}>
                {data.original_title}
              </Heading>
              <Text fontSize="md">Date Release: {data.release_date}</Text>
              <Text fontSize="md">Budget: {data.budget}</Text>
              <Text fontSize="md">
                Countries: {data.production_countries[0]?.name}
              </Text>
              <Flex>
                Genres:
                {data.genres.map((el) => {
                  return (
                    <Text key={el.id} fontSize="md">
                      &#xa0;{el.name},
                    </Text>
                  );
                })}
              </Flex>
              {/* <Text fontSize="md">Countries: {data.genres}</Text> */}
            </Flex>
          </Flex>
          <Text fontSize="md">Date Release: {data.overview}</Text>
          {!currentData?.data ? (
            <Button onClick={addToFavorite}>Add</Button>
          ) : (
            <Button onClick={removeToFavorite}>Remove</Button>
          )}
        </Box>
      )}
    </>
  );
};

export default MovieDetails;
