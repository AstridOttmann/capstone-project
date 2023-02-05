import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function DeleteButton({ onDeleteEntry }) {
  return (
    <StyledButton type="delete" onClick={onDeleteEntry}>
      <SVGIcon variant="bin" width="1.1rem" color="red" aria-label="bin" />
    </StyledButton>
  );
}
