import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function ButtonWithIcon({
  onClick,
  someVariant,
  buttonVariant,
  width,
  aria_label,
}) {
  return (
    <StyledButton type="button" variant={buttonVariant} onClick={onClick}>
      <SVGIcon variant={someVariant} width={width} aria-label={aria_label} />
    </StyledButton>
  );
}
