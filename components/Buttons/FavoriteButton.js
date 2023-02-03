import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function FavoriteButton({ id, isFavorite, onToggleFavorite }) {
  return (
    <StyledButton type="favorite" onClick={() => onToggleFavorite(id)}>
      <SVGIcon
        variant={isFavorite ? "likeActive" : "like"}
        width="1.5rem"
        aria-label="like"
      ></SVGIcon>
    </StyledButton>
  );
}
