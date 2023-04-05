import { Flex, Skeleton } from "@chakra-ui/react";

const MovieItemSkelet = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        w={"350px"}
        boxShadow={"mainShadow"}
        _hover={{ xl: { transform: "scale(1.04)" } }}
        borderRadius={"sm"}
        p={"10px"}
      >
        <Skeleton
          noOfLines={2}
          h={"30px"}
          color={"blackAlpha.900"}
          mb={"15px"}
        />
        <Skeleton noOfLines={2} h={"500px"} color={"blackAlpha.900"} />
      </Flex>
    </>
  );
};

export default MovieItemSkelet;
