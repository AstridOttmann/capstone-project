import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function SearchButton({ isSearchMode, onClick }) {
  return (
    <StyledButton
      type="button"
      variant={isSearchMode ? "hide" : "show"}
      onClick={onClick}
    >
      {isSearchMode ? "Close" : "Search"}
      {!isSearchMode && (
        <SVGIcon
          variant="search"
          width="2rem"
          color="#04BF45"
          aria-label="plus"
        />
      )}
    </StyledButton>
  );
}
