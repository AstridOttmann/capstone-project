import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function TranslateButton({ isTranslateMode, onClick }) {
  return (
    <StyledButton
      type="button"
      variant={isTranslateMode ? "hide" : "show"}
      onClick={onClick}
    >
      {isTranslateMode ? "Close" : "Translate"}
      {!isTranslateMode && (
        <SVGIcon
          variant="translate"
          width="2rem"
          color="#04BF45"
          aria-label="translate"
        />
      )}
    </StyledButton>
  );
}
