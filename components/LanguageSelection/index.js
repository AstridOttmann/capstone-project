import StyledButton from "../Buttons/StyledButton";
import StyledNav from "../Navigation/StyledNavigation";
import styled from "styled-components";
export default function LanguageSelection({
  onLanguageSelection,
  selectedLanguage,
  usedLanguages,
  isActive,
}) {
  return (
    <StyledNav variant="language">
      <StyledButtonWrapper>
        {usedLanguages.map((language) => {
          return (
            <StyledButton
              key={language}
              type="button"
              variant="language"
              isActive={selectedLanguage === language ? !isActive : isActive}
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
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  gap: 0.3rem;
  overflow-x: scroll;
`;
