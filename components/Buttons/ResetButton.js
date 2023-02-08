import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function ResetButton({ onClick }) {
  return (
    <StyledButton type="reset" variant="" onClick={onClick}>
      <SVGIcon variant="reset" width="1.5rem" aria-label="refresh" />
    </StyledButton>
  );
}
