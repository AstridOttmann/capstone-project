import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function SpeakerButton({ onClick }) {
  return (
    <StyledButton type="speaker" onClick={onClick}>
      <SVGIcon
        variant="speaker"
        width="1.5rem"
        color="#04BF45"
        aria-label="speaker"
      />
    </StyledButton>
  );
}
