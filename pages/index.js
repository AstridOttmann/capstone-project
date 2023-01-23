import Header from "../components/Header";
import Form from "../components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";
import ListEntry from "@/components/ListEntry";
import globalTranslations from "@/public/store";
import { atom, useAtom } from "jotai";

export default function HomePage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [isFound, setIsFound] = useState();

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
      setIsFound("false");
    } else {
      setTranslationList([...translationList]);
      setIsFound("true");
    }
  }

  return (
    <>
      <Header />
      <main>
        <h1>Add word</h1>
        <Form onAddTranslations={handleAddTranslations} />
        {isFound === "true" && <p>Wort bereits vorhanden</p>}
        {isFound === "false" && <p>neues Wort hinzugefügt</p>}

        {translationList.map((translation) => (
          <ListEntry key={translation.id}>
            <p>{translation.word}</p>
            <small>({translation.language})</small>
            <p>{translation.translated}</p>
          </ListEntry>
        ))}
      </main>
    </>
  );
}
