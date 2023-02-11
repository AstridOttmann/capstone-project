import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function SaveButton({ onClick }) {
  return (
    <StyledButton type="button" variant="save" onClick={onClick}>
      <SVGIcon
        variant="disc"
        width="1.8rem"
        color="#04BF45"
        aria-label="disc"
      />
    </StyledButton>
  );
}
