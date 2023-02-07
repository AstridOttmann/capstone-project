import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function EditButton({ onClick }) {
  return (
    <StyledButton type="button" variant="edit" onClick={onClick}>
      <SVGIcon variant="pencil" width="2rem" aria-label="pencil" />
    </StyledButton>
  );
}
