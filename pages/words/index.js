import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import ListEntry from "@/components/ListEntry";
import StyledList from "@/components/List/StyledList";
import StyledButton from "@/components/Button/StyledButton";
import { useState } from "react";
import SVGIcon from "@/components/Icons/SVGIcon";
import LanguageSelection from "@/components/LanguageSelection";
import Form from "@/components/Form";
import { useRouter } from "next/router";
import ToastMessage from "@/components/ToastMessage";

export default function WordsPage() {
  const [toast, setToast] = useState("");

  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();

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

      //setTranslationList(translationList.filter((entry) => entry.id !== id));
    }
    setToast("enter");
    setTimeout(exitToast, 2000);

    setTranslationList(translationList.filter((entry) => entry.id !== id));
  }

  function exitToast() {
    setToast("exit");
  }
  return (
    <main>
      <LanguageSelection
        usedLanguages={usedLanguages}
        selectedLanguage={selectedLanguage}
        onLanguageSelection={handleLanguageSelection}
      />
      <h1>My words</h1>
      <ToastMessage toast={toast} />
      <StyledList>
        {filteredTranslations.map((translation) => (
          <ListEntry key={translation.id}>
            <p>{translation.word}</p>
            {!selectedLanguage ? <small>({translation.language})</small> : ""}
            <p>{translation.translated}</p>
            <StyledButton
              type="edit"
              onClick={() => {
                router.push(`/words/${translation.id}`);
              }}
            >
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
