import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function FavoriteButton({ id, isFavorite, onToggleFavorite }) {
  return (
    <StyledButton
      type="button"
      variant="favorite"
      onClick={() => onToggleFavorite(id)}
    >
      <SVGIcon
        variant={isFavorite ? "likeActive" : "like"}
        width="1.5rem"
        aria-label="like"
      />
    </StyledButton>
  );
}
