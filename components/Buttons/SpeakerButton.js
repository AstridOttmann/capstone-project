import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function SpeakerButton({ onClick }) {
  return (
    <StyledButton type="button" variant="speaker" onClick={onClick}>
      <SVGIcon
        variant="speaker"
        width="2rem"
        color="#04BF45"
        aria-label="speaker"
      />
    </StyledButton>
  );
}
