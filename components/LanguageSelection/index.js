import StyledButton from "../Buttons/StyledButton";
import StyledNav from "../Navigation/StyledNavigation";
import styled from "styled-components";
export default function LanguageSelection({
  onLanguageSelection,
  selectedLanguage,
  usedLanguages,
}) {
  return (
    <StyledNav variant="language">
      <StyledButtonWrapper>
        {usedLanguages.map((language) => {
          return (
            <StyledButton
              key={language.id}
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
      </StyledButtonWrapper>
    </StyledNav>
  );
}
const StyledButtonWrapper = styled.div`
  marin: 0 auto;
  display: flex;
  justify-content: flex-start;
  gap: 0.5em;
  overflow-x: scroll;
`;
