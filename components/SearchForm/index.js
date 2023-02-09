import { useState } from "react";
import StyledForm from "../Form/StyledForm";
import StyledList from "../List/StyledList";
import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import SVGIcon from "../Icons/SVGIcon";
import styled from "styled-components";
import Link from "next/link";
import Divider from "../Divider";
import ResetButton from "../Buttons/ResetButton";
import StyledMessage from "../List/Message/StyledMessage";

export default function SearchForm({ selectedLanguage }) {
  const [translationList] = useAtom(globalTranslations);
  const [searchInput, setSearchInput] = useState("");

  const searchResults = translationList
    .filter((translation) => {
      if (selectedLanguage) {
        return translation.language === selectedLanguage;
      }
      return true;
    })
    .filter(
      (translation) =>
        translation.word.toLowerCase().indexOf(searchInput.toLowerCase()) === 0
    );

  return (
    <>
      <StyledForm variant="search">
        <StyledInputWrapper>
          <label htmlFor="searchValue"></label>
          <StyledInput
            id="searchValue"
            name="searchValue"
            placeholder="🔍"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </StyledInputWrapper>
        <ResetButton onClick={() => setSearchInput("")} />
      </StyledForm>
      {searchResults.length === 0 && searchInput.length > 0 ? (
        <StyledSection>
          <StyledMessage>Not found</StyledMessage>
        </StyledSection>
      ) : null}
      {searchInput.length > 0 && (
        <StyledList>
          {searchResults
            // .filter((translation) => translation.word.includes(searchInput))
            .map((translation) => {
              return (
                <StyledSection
                  key={translation.word}
                  onClick={() => {
                    setSearchInput(translation.word);
                  }}
                >
                  <StyledMessage>
                    {translation.word} -{" "}
                    {!selectedLanguage ? (
                      <small>({translation.language}) - </small>
                    ) : (
                      ""
                    )}
                    {translation.translated}{" "}
                    <StyledLink href={`/words/${translation.id}`}>
                      show entry
                      <SVGIcon
                        variant="arrow"
                        width="2rem"
                        color="#04BF45"
                        aria-label="arrow"
                      />
                    </StyledLink>
                  </StyledMessage>
                </StyledSection>
              );
            })}
          <Divider />
        </StyledList>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  background: whitesmoke;
  _border: 1px dashed lightgrey;
  border-radius: 5px;
`;

const StyledInputWrapper = styled.div`
  flex-grow: 4;
`;
const StyledInput = styled.input`
  width: 100%;
`;
