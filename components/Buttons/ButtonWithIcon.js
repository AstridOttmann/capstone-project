import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function ButtonWithIcon({
  onClick,
  someVariant,
  buttonVariant,
  width,
  aria_label,
  type,
  isActive,
}) {
  return (
    <StyledButton
      type={type}
      variant={buttonVariant}
      onClick={onClick}
      isActive={isActive}
    >
      <SVGIcon variant={someVariant} width={width} aria-label={aria_label} />
    </StyledButton>
  );
}
