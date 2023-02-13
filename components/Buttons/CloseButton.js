import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function CloseButton({ onClick }) {
  return (
    <StyledButton type="button" variant="close" onClick={onClick}>
      <SVGIcon
        variant="close"
        width="1.5rem"
        color="#04BF45"
        aria-label="close"
      />
    </StyledButton>
  );
}
