import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function AddButton({ isAddMode, onClick }) {
  return (
    <StyledButton
      type="button"
      variant={isAddMode ? "hide" : "show"}
      onClick={onClick}
    >
      {isAddMode ? "Close" : "Add"}
      {!isAddMode && (
        <SVGIcon
          variant="plus"
          width="2rem"
          color="#494FBF"
          aria-label="plus"
        />
      )}
    </StyledButton>
  );
}
