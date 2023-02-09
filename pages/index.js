import Form from "../components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";
import translationListAtom from "@/public/store";
import { atom, useAtom } from "jotai";
import styled from "styled-components";
import Link from "next/link";
import SVGIcon from "@/components/Icons/SVGIcon";
import SearchForm from "@/components/SearchForm";
import StyledMessage from "@/components/List/Message/StyledMessage";
import StyledTitle from "@/components/Header/StyledTitle";
import TranslationForm from "@/components/TranslationForm";
import StyledButton from "@/components/Buttons/StyledButton";

export default function HomePage() {
  const [translationList, setTranslationList] = useAtom(translationListAtom);
  const [isFound, setIsFound] = useState();
  const [isAddMode, setIsAddMode] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isTranslateMode, setIsTranslateMode] = useState(false);

  function handleFirstInput() {
    setIsFound("");
  }

  function handleAddTranslation(newTranslation) {
    const newEntryExists = translationList.filter(
      (translation) =>
        translation.word.toLowerCase() === newTranslation.word.toLowerCase()
    );

    translationList.sort((a, b) => {
      const wordA = a.word.toLowerCase();
      const wordB = b.word.toLowerCase();
      if (wordA < wordB) {
        return -1;
      }
      if (wordA > wordB) {
        return 1;
      }
      return 0;
    });

    if (newEntryExists.length === 0) {
      setTranslationList([
        { id: nanoid(), voiceURI: newTranslation.voiceURI, ...newTranslation },
        ...translationList,
      ]);
      setIsFound(false);
    } else {
      //setTranslationList([...translationList]);
      setIsFound(true);
    }
  }

  return (
    <>
      <main>
        <div>
          <StyledButton
            type="button"
            variant="show-hide"
            onClick={() => {
              setIsAddMode(!isAddMode);
              setIsFound("");
            }}
          >
            {isAddMode ? "Close" : "Add word"}
          </StyledButton>
          {isAddMode && (
            <Form
              isEditMode={false}
              onSubmitEvent={handleAddTranslation}
              onFirstInput={handleFirstInput}
            />
          )}
          <StyledSection>
            {isFound && <StyledMessage>word already exists</StyledMessage>}
            {isFound === false && (
              <>
                <StyledMessage>added new word</StyledMessage>
                <StyledLink href="/words">
                  show entry
                  <SVGIcon
                    variant="arrow"
                    width="2rem"
                    color="#04BF45"
                    aria-label="variant"
                  />
                </StyledLink>
              </>
            )}
          </StyledSection>
        </div>
        <div>
          <StyledButton
            type="button"
            variant="show-hide"
            onClick={() => {
              setIsSearchMode(!isSearchMode);
            }}
          >
            {isSearchMode ? "Close" : "Search word"}
          </StyledButton>
          {isSearchMode && <SearchForm />}
        </div>
        <div>
          <StyledButton
            type="button"
            variant="show-hide"
            onClick={() => {
              setIsTranslateMode(!isTranslateMode);
            }}
          >
            {isTranslateMode ? "Close" : "Translate word"}
          </StyledButton>
          {isTranslateMode && <TranslationForm />}
        </div>
      </main>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  background: whitesmoke;
  _border: 1px dashed lightgrey;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;
