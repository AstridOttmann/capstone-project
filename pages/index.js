import Header from "./components/Header";
import Form from "./components/Form";
import { startTransition, useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

const initialTranslations = [
  { id: 1, word: "verjaardag", translated: "Geburtstag" },
  { id: 2, word: "uitnodigen", translated: "einladen" },
  { id: 3, word: "verrassing", translated: "Überraschung" },
  { id: 4, word: "schattig", translated: "niedlich" },
  { id: 5, word: "moe", translated: "müde" },
];

const StyledEntry = styled.div`
  border: 1px dashed black;
  border-radius: 10px;
  margin: 1em;
  padding: 0.5em;
`;

export default function HomePage() {
  const [translations, setTranslations] = useState(initialTranslations);
  console.log("hier", translations);

  initialTranslations.sort((a, b) => {
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

  function handleAddTranslations(newTranslation) {
    const newTranslations = translations
      .slice()
      .filter((translation) => translation.word !== newTranslation.word)
      .sort((a, b) => {
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
    console.log("sort", newTranslations);
    setTranslations([{ id: nanoid(), ...newTranslation }, ...newTranslations]);
  }

  return (
    <>
      <Header />
      <main>
        <h1>Add word</h1>
        <Form onAddTranslations={handleAddTranslations} />
        {translations.map((translation) => (
          <StyledEntry key={translation.id}>
            <p>{translation.word}</p>
            <small>{translation.translated}</small>
          </StyledEntry>
        ))}
      </main>
    </>
  );
}
