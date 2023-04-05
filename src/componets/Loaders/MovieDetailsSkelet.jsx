import { Box, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieDetailsSkelet = () => {
  return (
    <>
      <Box position={"relative"} pb={"30px"} pt={"20px"}>
        <Flex flexDirection={{ base: "column", lg: "row" }} mb={"20px"}>
          <Skeleton
            h={{ base: "715px", lg: "480px", xl: "640px" }}
            w={{ base: "100%", lg: " 450px" }}
          />
          <Flex
            w={600}
            flexDirection={"column"}
            p={{ base: "20px 0", lg: "0 15px" }}
          >
            <Skeleton
              height={"30px"}
              w={{ base: "400px", lg: " 291px", xl: "400px" }}
            />
            <SkeletonText
              w={"400px"}
              mt="4"
              noOfLines={4}
              spacing="4"
              skeletonHeight="5"
            />
          </Flex>
        </Flex>
        <SkeletonText mt="4" noOfLines={3} spacing="3" skeletonHeight="3" />
      </Box>
    </>
  );
};

export default MovieDetailsSkelet;
