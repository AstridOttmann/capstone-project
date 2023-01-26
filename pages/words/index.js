import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import ListEntry from "@/components/ListEntry";
import StyledList from "@/components/List/StyledList";
import StyledButton from "@/components/Button/StyledButton";
import { useState } from "react";
import SVGIcon from "@/components/Icons/SVGIcon";
import LanguageSelection from "@/components/LanguageSelection";
import { router } from "next/router";

export default function WordsPage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // filter for array only selected languages
  const usedLanguagesWithDublicates = translationList.map((language) => {
    return language.language;
  });
  //removing duplicates
  const usedLanguages = [...new Set(usedLanguagesWithDublicates)]; // https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o

  function handleLanguageSelection(language) {
    // toggles the button & sets the language
    if (selectedLanguage !== language) {
      setSelectedLanguage(language);
    } else {
      setSelectedLanguage("");
    }
  }

  // displays the list with the entries in the selected language
  const filteredTranslations = translationList.filter((translation) => {
    if (selectedLanguage) {
      return translation.language === selectedLanguage;
    }
    return true;
  });

  function handleDeleteEntry(id) {
    if (filteredTranslations.length === 1) {
      setSelectedLanguage("");
      setTranslationList(translationList.filter((entry) => entry.id !== id));
    }
    setTranslationList(translationList.filter((entry) => entry.id !== id));
  }
  // function handleDeleteEntry(id) {
  //   setTranslationList(translationList.filter((entry) => entry.id !== id));
  // }

  return (
    <main>
      <LanguageSelection
        usedLanguages={usedLanguages}
        selectedLanguage={selectedLanguage}
        onLanguageSelection={handleLanguageSelection}
      />
      <h1>My words</h1>
      <StyledList>
        {filteredTranslations.map((translation) => (
          <ListEntry key={translation.id}>
            <p>{translation.word}</p>
            {!selectedLanguage ? <small>({translation.language})</small> : ""}

            <p>{translation.translated}</p>
            <StyledButton type="edit">
              <SVGIcon
                variant="pencil"
                width="1.1rem"
                aria-label="pencil"
              ></SVGIcon>
            </StyledButton>
            <StyledButton
              type="delete"
              onClick={() => handleDeleteEntry(translation.id)}
            >
              <SVGIcon
                variant="bin"
                width="1.1rem"
                color="red"
                aria-label="bin"
              />
            </StyledButton>
          </ListEntry>
        ))}
      </StyledList>
    </main>
  );
}
