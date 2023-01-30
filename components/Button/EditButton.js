import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function EditButton({ onClick }) {
  return (
    <StyledButton type="edit" onClick={onClick}>
      <SVGIcon variant="pencil" width="1.1rem" aria-label="pencil"></SVGIcon>
    </StyledButton>
  );
}
