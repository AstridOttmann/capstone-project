import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function GoBackButton({ onClick }) {
  return (
    <StyledButton type="button" variant="goBack" onClick={onClick}>
      <SVGIcon variant="goBack" width="2.3rem" aria-label="goBack" />
    </StyledButton>
  );
}
