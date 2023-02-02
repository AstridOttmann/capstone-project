import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function RefreshButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <SVGIcon variant="refresh" width="1.5rem" aria-label="refresh" />
    </StyledButton>
  );
}
