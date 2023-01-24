import Header from "../components/Header";
import Form from "../components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";
import globalTranslations from "@/public/store";
import { atom, useAtom } from "jotai";
import MainNavigation from "@/components/MainNavigation";
import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [isFound, setIsFound] = useState(false);

  function handleAddTranslations(newTranslation) {
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
      <Header />
      <main>
        <h1>Add word</h1>

        <Form onAddTranslations={handleAddTranslations} />
        <StyledSection>
          {isFound ? (
            <p>word already exists</p>
          ) : (
            <>
              <p>added new word</p>
              <Link href="/words">show entry {``}</Link>
            </>
          )}
        </StyledSection>
      </main>
      <MainNavigation />
    </>
  );
}

const StyledSection = styled.section`
  text-align: center;
  padding: 2rem;
  font-size: 1.2em;
`;
