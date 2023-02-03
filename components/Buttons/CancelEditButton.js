import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function CancelEditButton({ onClick }) {
  return (
    <StyledButton type="discard" onClick={onClick}>
      <SVGIcon
        variant="cancel"
        width="2rem"
        color="#F27405"
        aria-label="cancel"
      />
    </StyledButton>
  );
}
