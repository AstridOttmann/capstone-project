import Form from "../components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";
import globalTranslations from "@/public/store";
import { atom, useAtom } from "jotai";
import styled from "styled-components";
import Link from "next/link";
import SVGIcon from "@/components/Icons/SVGIcon";

export default function HomePage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [isFound, setIsFound] = useState();

  function handleFirstInput() {
    setIsFound("");
  }

  function handleAddTranslation(newTranslation) {
    const checkNewEntry = translationList
      .slice()
      .filter(
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

    if (checkNewEntry.length === 0) {
      setTranslationList([
        { id: nanoid(), ...newTranslation },
        ...translationList,
      ]);
      setIsFound(false);
    } else {
      setTranslationList([...translationList]);
      setIsFound(true);
    }
  }

  return (
    <>
      <main>
        <h1>Add word</h1>

        <Form
          onAddTranslations={handleAddTranslation}
          onFirstInput={handleFirstInput}
        />
        <StyledSection>
          {isFound && <p>word already exists</p>}
          {isFound === false && (
            <>
              <p>added new word</p>
              <Link href="/words">
                show entry
                <SVGIcon
                  variant="arrow"
                  width="2rem"
                  color="#04BF45"
                  aria-label="variant"
                />
              </Link>
            </>
          )}
        </StyledSection>
      </main>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;
