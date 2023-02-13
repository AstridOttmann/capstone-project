import Form from "../components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";
import translationListAtom from "@/public/store";
import { atom, useAtom } from "jotai";
import styled from "styled-components";
import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import Message from "@/components/Message";
import TranslationForm from "@/components/TranslationForm";
import RoutingLink from "@/components/Message/RoutingLink";
import Layout from "@/components/Layout";
import ToggleButton from "@/components/Buttons/ToggleButton";
import Divider from "@/components/Divider";

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
      <Divider />{" "}
      <StyledSection>
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
        ></ToggleButton>
        {isAddMode && (
          <>
            <Form
              isEditMode={false}
              onSubmitEvent={handleAddTranslation}
              onFirstInput={handleFirstInput}
            />
            <StyledArticle>
              {isFound && <Message>word already exists</Message>}
              {isFound === false && (
                <>
                  <Message>added new word</Message>
                  <RoutingLink href="/words" />
                </>
              )}
            </StyledArticle>
          </>
        )}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin-top: 1rem;
  position: relative;
  padding: 2rem;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  background: whitesmoke;
  _border: 1px dashed lightgrey;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;
