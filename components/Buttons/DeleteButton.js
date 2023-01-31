import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function DeleteButton({ onDeleteEntry, id }) {
  return (
    <StyledButton type="delete" onClick={() => onDeleteEntry(id)}>
      <SVGIcon variant="bin" width="1.1rem" color="red" aria-label="bin" />
    </StyledButton>
  );
}
