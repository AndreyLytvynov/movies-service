import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Heading as="h1" size="lg">
        Welcome to our home movie page!
      </Heading>
      <Text textIndent={"20px"}>
        Here you will find a wide selection of movies ranging from action and
        adventure to romance and drama. We take pride in offering our visitors a
        diverse selection of films that are sure to please any movie lover.
        Browse our collection and discover new favorites, or use our search
        feature to find specific titles. And if you have a movie you'd like to
        recommend, we'd love to hear from you! Simply add it to our collection
        and share your passion for cinema with others. Thank you for choosing
        our site as your go-to destination for all things movies. Enjoy!
      </Text>
      <Text textIndent={"20px"}>
        To start using our service, registration is required. Don't worry, it's
        quick and easy! Simply click on the
        <Link to={"/register"} style={{ color: "#2b6cb0" }}>
          &#xa0;Register
        </Link>
        &#xa0;or
        <Link to={"/login"} style={{ color: "#2b6cb0" }}>
          &#xa0;Login&#xa0;
        </Link>
        button and fill out the necessary information. Once you're registered,
        you can start browsing our collection and adding movies to your personal
        page. Thank you for choosing our site, and happy movie watching!
      </Text>
    </Box>
  );
};

export default Home;
