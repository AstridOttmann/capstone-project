import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function EditButton({ onClick, isShowMode }) {
  return (
    <StyledButton type="edit" onClick={onClick}>
      <SVGIcon variant="pencil" width="2rem" aria-label="pencil"></SVGIcon>
    </StyledButton>
  );
}
