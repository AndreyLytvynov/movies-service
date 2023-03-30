import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useGetMoviesByNameQuery } from "../redux/slice/movieSlice";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [name, setName] = useState("");
  const { data } = useGetMoviesByNameQuery(name);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log(data);
    navigate("/search", { state: data });
  };
  return (
    <InputGroup w={300} ml={"200px"} type="submit">
      <InputRightElement pointerEvents="fill" onClick={onSubmit}>
        <IconButton
          aria-label="Search database"
          size={"sm"}
          icon={<SearchIcon />}
        />
      </InputRightElement>
      <Input
        variant={"search"}
        type="text"
        placeholder="Film name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchForm;
