import SVGIcon from "../Icons/SVGIcon";
import StyledButton from "./StyledButton";

export default function SeeMoreButton({ onClick }) {
  return (
    <StyledButton type="seeMore" onClick={onClick}>
      <SVGIcon
        variant="seeMore"
        width="1.2rem"
        color="#04BF45"
        aria-label="seeMore"
      />
    </StyledButton>
  );
}
