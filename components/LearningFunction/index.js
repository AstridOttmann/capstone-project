import StyledButton from "../Buttons/StyledButton";
import styled, { css } from "styled-components";
import translationListAtom from "@/public/store";
import { useAtom } from "jotai";
import { useState } from "react";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

export default function LearningFunction({ selectedLanguage }) {
  const [translationList, setTranslationList] = useAtom(translationListAtom);
  const [randomEntry, setRandomEntry] = useState(false);
  const [hideAnswer, setHideAnswer] = useState(true);
  //const [showLearning, setShowLearning] = useState(false);

  function findRandomWord() {
    const randomWordEntry =
      translationList[Math.floor(Math.random() * translationList.length)];

    setRandomEntry(randomWordEntry);
    setHideAnswer(true);
    // setShowLearning(true);
  }

  // function handleOpenLearning() {
  //   setShowLearning(true);
  // }

  // function handleCloseLearning() {
  //   setShowLearning(false);
  // }

  return (
    <StyledLearningSection randomEntry={randomEntry}>
      <ButtonWithIcon
        buttonVariant="dices"
        someVariant="dices"
        width="2.5rem"
        aria-label="dices"
        onClick={findRandomWord}
      />
      {randomEntry ? (
        <>
          <ButtonWithIcon
            randomEntry={randomEntry}
            buttonVariant="close"
            someVariant="close"
            width="1.5rem"
            aria-label="close"
            onClick={() => setRandomEntry()}
          />
          <StyledLearningArticle randomEntry={randomEntry}>
            <StyledWords>{randomEntry.word}</StyledWords>
            <ButtonWithIcon
              type="button"
              buttonVariant="eye"
              someVariant={hideAnswer ? "eye" : "eye_off"}
              width="2rem"
              onClick={() => {
                setHideAnswer(!hideAnswer);
              }}
            ></ButtonWithIcon>
            {hideAnswer ? (
              ""
            ) : (
              <StyledAnswerContainer>
                <small>{randomEntry.language.toUpperCase()}</small>
                <StyledWords>{randomEntry.translated}</StyledWords>
              </StyledAnswerContainer>
            )}
          </StyledLearningArticle>
        </>
      ) : (
        ""
      )}
    </StyledLearningSection>
  );
}

const StyledWords = styled.p`
  margin: 0;
`;
const StyledAnswerContainer = styled.div`
  _border: 4px solid var(--dark-primary-color);
`;
const StyledLearningArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-top: 3rem;
  _margin-bottom: 1rem;
  font-size: 1.2rem;
  color: var(--primary-color);
  background: var(--dark-primary-color);
  _opacity: 0.8;
  border: 4px solid var(--dark-primary-color);
  border-radius: 40px;
`;
const StyledLearningSection = styled.section`
  position: relative;
  _padding-top: 2rem;
  margin: 1rem auto 1.5rem auto;
  border: none;
`;
