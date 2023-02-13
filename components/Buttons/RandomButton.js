import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function RandomButton({ onClick }) {
  return (
    <StyledButton type="button" variant="random" onClick={onClick}>
      <SVGIcon variant="dices" width="2rem" color="#04BF45" aria-label="dice" />
    </StyledButton>
  );
}
