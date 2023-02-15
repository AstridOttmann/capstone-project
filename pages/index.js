import Form from "../components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";
import translationListAtom from "@/public/store";
import { atom, useAtom } from "jotai";
import SearchForm from "@/components/SearchForm";
import Message from "@/components/Message";
import TranslationForm from "@/components/TranslationForm";
import RoutingLink from "@/components/Message/RoutingLink";
import ToggleButton from "@/components/Buttons/ToggleButton";
import Divider from "@/components/Divider";
import {
  StyledMessageArticle,
  StyledSection,
} from "@/components/StyledElements";

export default function HomePage() {
  const [translationList, setTranslationList] = useAtom(translationListAtom);
  const [isFound, setIsFound] = useState();
  const [isAddMode, setIsAddMode] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isTranslateMode, setIsTranslateMode] = useState(false);

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

  function handleFirstInput() {
    setIsFound("");
  }

  function handleAddTranslation(newTranslation) {
    const newEntryExists = translationList.filter(
      (translation) =>
        translation.word.toLowerCase() === newTranslation.word.toLowerCase()
    );

    if (newEntryExists.length === 0) {
      setTranslationList([
        { id: nanoid(), voiceURI: newTranslation.voiceURI, ...newTranslation },
        ...translationList,
      ]);
      setIsFound(false);
    } else {
      setIsFound(true);
    }
  }

  return (
    <>
      <Divider variant="top_page" />
      <StyledSection>
        <ToggleButton
          someVariant={isSearchMode ? "close" : "search"}
          isSomeMode={isSearchMode}
          onClick={() => {
            setIsSearchMode(!isSearchMode);
          }}
        />
        {isSearchMode && <SearchForm />}
      </StyledSection>
      <Divider />
      <StyledSection variant="translate">
        <ToggleButton
          someVariant={isTranslateMode ? "close" : "translate"}
          isSomeMode={isTranslateMode}
          onClick={() => {
            setIsTranslateMode(!isTranslateMode);
          }}
        />
        {isTranslateMode && <TranslationForm />}
      </StyledSection>
      <Divider />
      <StyledSection>
        <ToggleButton
          someVariant={isAddMode ? "close" : "plus"}
          isSomeMode={isAddMode}
          onClick={() => {
            setIsAddMode(!isAddMode);
            setIsFound("");
          }}
        />
        {isAddMode && (
          <>
            <Form
              isEditMode={false}
              onSubmitEvent={handleAddTranslation}
              onFirstInput={handleFirstInput}
            />
            <StyledMessageArticle>
              {isFound && <Message>word already exists</Message>}
              {isFound === false && (
                <>
                  <Message>added new word</Message>
                  <RoutingLink href="/words" />
                </>
              )}
            </StyledMessageArticle>
          </>
        )}
      </StyledSection>
      <Divider variant="bottom_page" />
    </>
  );
}
