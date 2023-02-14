import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function ToggleButton({ isSomeMode, onClick, someVariant }) {
  return (
    <StyledButton
      type="button"
      variant={isSomeMode ? "hide" : "show"}
      onClick={onClick}
    >
      <SVGIcon
        variant={someVariant}
        width={isSomeMode ? "1.5rem" : "3rem"}
        color="var(--dark-primary-color)"
        aria-label={isSomeMode ? "close" : "plus"}
      />
    </StyledButton>
  );
}
