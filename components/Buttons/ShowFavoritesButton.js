import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function ShowFavoritesButton({ onShowFavorites, isActive }) {
  return (
    <StyledButton
      type="button"
      variant="nav-favorite"
      onClick={() => onShowFavorites()}
      isActive={isActive}
    >
      <SVGIcon
        variant="likeActive"
        width={isActive ? "3rem" : "2rem"}
        aria-label="likeActive"
      />
    </StyledButton>
  );
}
