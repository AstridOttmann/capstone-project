import StyledButton from "../Buttons/StyledButton";
import StyledNav from "../MainNavigation/StyledNavigation";

export default function LanguageSelection({
  onLanguageSelection,
  selectedLanguage,
  usedLanguages,
}) {
  return (
    <StyledNav variant="language">
      {usedLanguages.map((language) => {
        return (
          <StyledButton
            key={language}
            type="button"
            variant={
              selectedLanguage === language ? "language-selected" : "language"
            }
            onClick={() => onLanguageSelection(language)}
          >
            {language}
          </StyledButton>
        );
      })}
    </StyledNav>
  );
}
