import StyledButton from "./StyledButton";
import SVGIcon from "../Icons/SVGIcon";

export default function ShowFavoritesButton({ onShowFavorites, isActive }) {
  return (
    <StyledButton
      type="nav-favorite"
      onClick={() => onShowFavorites()}
      isActive={isActive}
    >
      <SVGIcon
        variant="likeActive"
        width={isActive ? "2rem" : "1.5rem"}
        aria-label="likeActive"
      ></SVGIcon>
    </StyledButton>
  );
}
