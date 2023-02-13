import RandomButton from "../Buttons/RandomButton";
import StyledButton from "../Buttons/StyledButton";
import styled from "styled-components";
import translationListAtom from "@/public/store";
import { useAtom } from "jotai";
import { useState } from "react";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

export default function LearningFunction({ selectedLanguage }) {
  const [translationList, setTranslationList] = useAtom(translationListAtom);
  const [randomEntry, setRandomEntry] = useState(false);
  const [hideAnswer, setHideAnswer] = useState(true);

  function findRandomWord() {
    const randomWordEntry =
      translationList[Math.floor(Math.random() * translationList.length)];

    setRandomEntry(randomWordEntry);
    setHideAnswer(true);
  }

  return (
    <StyledContainer>
      <RandomButton onClick={findRandomWord} />
      {randomEntry ? (
        <>
          <ButtonWithIcon
            buttonVariant=""
            someVariant="close"
            width="0.75rem"
            aria-label="close"
            onClick={() => setRandomEntry()}
          />
          <StyledSection>
            <p>{randomEntry.word}</p>
            <StyledButton
              type="button"
              variant="submit"
              onClick={() => {
                setHideAnswer(!hideAnswer);
              }}
            >
              {hideAnswer ? "show answer" : "hide answer"}
            </StyledButton>
            {hideAnswer ? (
              ""
            ) : (
              <article>
                <small>{randomEntry.language}</small>
                <p>{randomEntry.translated}</p>
              </article>
            )}
          </StyledSection>
        </>
      ) : (
        ""
      )}
    </StyledContainer>
  );
}
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  background: whitesmoke;
  _border: 1px dashed lightgrey;
  border-radius: 5px;
`;
const StyledContainer = styled.div`
  psition: relative;
  margin: 1rem auto;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;
