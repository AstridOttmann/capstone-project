import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function CancelDeleteButton({ onClick }) {
  return (
    <StyledButton type="discard" onClick={onClick}>
      <SVGIcon
        variant="cancel"
        width="2.5rem"
        color="#F27405"
        aria-label="cancel"
      ></SVGIcon>
    </StyledButton>
  );
}
