import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import ListEntry from "@/components/ListEntry";
import StyledList from "@/components/List/StyledList";
import StyledButton from "@/components/Button/StyledButton";
import { useState } from "react";
import SVGIcon from "@/components/Icons/SVGIcon";
import LanguageSelection from "@/components/LanguageSelection";

export default function WordsPage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  //
  const usedLanguagesWithDublicates = translationList.map((language) => {
    return language.language;
  });
  //removing duplicates
  const usedLanguages = [...new Set(usedLanguagesWithDublicates)]; // https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
  console.log("usedLanguages", usedLanguages);

  function handleLanguageSelection(language) {
    // toggles the button & sets the language
    if (selectedLanguage !== language) {
      setSelectedLanguage(language);
    } else {
      setSelectedLanguage("");
    }
  }

  function handleDeleteEntry(id) {
    setTranslationList(translationList.filter((entry) => entry.id !== id));
  }

  // displays the list with the entries in the selected language
  const filteredTranslations = translationList.filter((translation) => {
    if (selectedLanguage) {
      return translation.language === selectedLanguage;
    }
    return true;
  });
  console.log("filtered", filteredTranslations);

  return (
    <>
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
              <small>({translation.language})</small>
              <p>{translation.translated}</p>
              <StyledButton
                type="delete"
                onClick={() => handleDeleteEntry(translation.id)}
              >
                <SVGIcon variant="bin" width="1.5rem" color="red" />
              </StyledButton>
            </ListEntry>
          ))}
        </StyledList>
      </main>
    </>
  );
}
