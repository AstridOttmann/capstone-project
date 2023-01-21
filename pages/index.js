import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";

const initialTranslations = [
  { id: 1, word: "verjaardag", translated: "Geburtstag" },
  { id: 2, word: "uitnodigen", translated: "einladen" },
  { id: 3, word: "verrassing", translated: "Überraschung" },
  { id: 4, word: "schattig", tanslated: "niedlich" },
];

export default function HomePage() {
  const [translations, setTranslations] = useState(initialTranslations);
  console.log(translations);

  function handleAddTranslations(newTranslation) {
    setTranslations([{ id: nanoid(), ...newTranslation }, ...translations]);
  }

  return (
    <>
      <Header />
      <main>
        <h1>Add word</h1>
        <Form onAddTranslations={handleAddTranslations} />
        {translations.map((translation) => (
          <div key={translation.id}>
            <p>{translation.word}</p>
            <small>{translation.translated}</small>
          </div>
        ))}
      </main>
    </>
  );
}
