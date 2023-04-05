import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMoviesByIdQuery } from "../../redux/movieApi/movieSlice";
import {
  useCurrentFavoriteQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from "../../redux/movieCastomApi/movieCastomSlice";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import Toast from "../../hooks/toast";
import MovieDetailsSkelet from "../../componets/Loaders/MovieDetailsSkelet";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMoviesByIdQuery(id);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { currentData } = useCurrentFavoriteQuery(id);
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const { addToast } = Toast();

  const addToFavorite = async () => {
    const res = await addFavorite(data);

    if (res) {
      addToast({ message: "Add to favorites", type: "success" });
    }
  };

  const removeToFavorite = async () => {
    await deleteFavorite(id);
    addToast({ message: "Remove from favorites", type: "success" });
  };

  return (
    <>
      {!isLoading ? (
        <Box position={"relative"} pb={"30px"}>
          <Button onClick={goBack} variant={"goBack"}>
            Go back
          </Button>
          <Flex flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Image
                src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
                alt={data.original_title}
                w={"450px"}
              />
              <Flex flexDirection={"column"} w={"100%"}>
                {currentData?.data ? (
                  <Button onClick={removeToFavorite} variant={"addFavorites"}>
                    <MdOutlineFavorite />
                    &#xa0; Remove from favorites
                  </Button>
                ) : (
                  <Button onClick={addToFavorite} variant={"addFavorites"}>
                    <MdOutlineFavoriteBorder />
                    &#xa0; Add to favorites
                  </Button>
                )}
              </Flex>
            </Box>
            <Flex
              w={600}
              flexDirection={"column"}
              p={{ base: "20px 0", lg: "0 15px" }}
            >
              <Heading as="h1" size="md" noOfLines={2}>
                {data.original_title}
              </Heading>
              <Flex mt={"15px"}>
                <Text fontWeight={700}>Date Release:&#xa0;</Text>
                {data.release_date}
              </Flex>
              <Flex mt={"5px"}>
                <Text fontWeight={700}>Budget:&#xa0;</Text>
                {data.budget}$
              </Flex>
              <Flex mt={"5px"}>
                <Text fontWeight={700}>Countries:&#xa0;</Text>
                {data.production_countries[0]?.name}
              </Flex>
              <Flex mt={"5px"}>
                <Text fontWeight={700}>Genres:&#xa0;</Text>
                <Flex flexWrap={"wrap"}>
                  {data.genres
                    ? data.genres.map((gen) => gen.name).join(", ")
                    : ""}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="md" mt={{ lg: "10px" }}>
            {data.overview}
          </Text>
        </Box>
      ) : (
        <MovieDetailsSkelet />
      )}
    </>
  );
};

export default MovieDetails;
