import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) return;
    navigate("/search", { state: name });
  };
  return (
    <InputGroup
      as={"form"}
      w={300}
      onSubmit={onSubmit}
      mb={{ base: "20px", lg: "0" }}
    >
      <InputRightElement pointerEvents="fill">
        <IconButton
          aria-label="Search database"
          size={"sm"}
          icon={<SearchIcon />}
          type="submit"
          color={"blackAlpha.500"}
        />
      </InputRightElement>
      <Input
        variant={{ base: "searchMobile", lg: "search" }}
        type="text"
        placeholder="search movie"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchForm;
