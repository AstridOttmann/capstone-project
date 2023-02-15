import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function FavoriteButton({
  id,
  isFavorite,
  onToggleFavorite,
  variant,
}) {
  return (
    <StyledButton
      type="button"
      variant={variant}
      isFavorite={isFavorite}
      onClick={() => onToggleFavorite(id)}
    >
      <SVGIcon variant="likeActive" width="2rem" aria-label="like" />
    </StyledButton>
  );
}
// {isFavorite ? "likeActive" : "like"}
