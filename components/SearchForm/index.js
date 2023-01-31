import { useState } from "react";
import StyledButton from "../Buttons/StyledButton";
import StyledForm from "../Form/StyledForm";

export default function SearchForm({ onChange }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <StyledForm>
      <label htmlFor="searchvalue"></label>
      <input
        id="searchvalue"
        name="searchvalue"
        placeholder="🔍"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <p>Searching for: {searchInput}</p>
      <StyledButton type="submit">Show</StyledButton>
    </StyledForm>
  );
}
