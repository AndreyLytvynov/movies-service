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
      ml={"100px"}
      mr={"100px"}
      onSubmit={onSubmit}
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
        variant={"search"}
        type="text"
        placeholder="search"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchForm;
