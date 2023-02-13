import { atom, useAtom } from "jotai";
import styled, { css } from "styled-components";
import translationListAtom from "@/public/store";
import ListEntry from "@/components/ListEntry";
import StyledList from "@/components/List/StyledList";
import { useEffect, useState } from "react";
import LanguageSelection from "@/components/LanguageSelection";
import { useRouter } from "next/router";
import FavoriteButton from "@/components/Buttons/FavoriteButton";
import ShowFavoritesButton from "@/components/Buttons/ShowFavoritesButton";
import SearchForm from "@/components/SearchForm";
import StyledTitle from "@/components/Titles/StyledTitle";
import SpeechSynthesis from "@/components/SpeechSynthesisModule/SpeechSynthesis";
import LearningFunction from "@/components/LearningFunction";
import ButtonWithIcon from "@/components/Buttons/ButtonWithIcon";
import Divider from "@/components/Divider";

export default function WordsPage({ availableVoices }) {
  const [translationList, setTranslationList] = useAtom(translationListAtom);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const [favoriteFilter, setFavoriteFilter] = useState(false);

  //custom <ClientOnly> wrapper : https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  // toggles the button
  function handleToggleFavorite(id) {
    setTranslationList(
      translationList.map((translation) =>
        translation.id === id
          ? { ...translation, isFavorite: !translation.isFavorite }
          : translation
      )
    );
  }

  // sets the filter
  function handleShowFavorites() {
    if (!favoriteFilter) {
      setFavoriteFilter(true);
    } else {
      setFavoriteFilter(false);
    }
  }

  // filter for array only selected languages
  const usedLanguagesWithDublicates = translationList.map((language) => {
    return language.language;
  });
  //removing duplicates
  const usedLanguages = [...new Set(usedLanguagesWithDublicates)]; // https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o

  // toggles the button & sets the language
  function handleLanguageSelection(language) {
    if (selectedLanguage !== language) {
      setSelectedLanguage(language);
    } else {
      setSelectedLanguage("");
    }
  }

  // filters the list with the entries by the selected language and favorites and displays it
  const filteredTranslations = translationList
    .filter((translation) => {
      if (selectedLanguage) {
        return translation.language === selectedLanguage;
      }
      return true;
    })
    .filter((translation) => {
      if (favoriteFilter) {
        return translation.isFavorite;
      }
      return true;
    });

  return (
    <>
      <LanguageSelection
        usedLanguages={usedLanguages}
        selectedLanguage={selectedLanguage}
        onLanguageSelection={handleLanguageSelection}
      />
      <StyledTitle page="words">My words</StyledTitle>
      <ShowFavoritesButton
        favoriteFilter={favoriteFilter}
        isActive={favoriteFilter === true}
        onShowFavorites={handleShowFavorites}
      />
      <LearningFunction />
      <SearchForm selectedLanguage={selectedLanguage} />
      <StyledList>
        {filteredTranslations.map((translation) => (
          <ListEntry
            key={translation.id}
            id={translation.id}
            isFavorite={translation.isFavorite}
          >
            <StyledContainer variant="text">
              <StyledWordFields>{translation.word}</StyledWordFields>
              <SpeechSynthesis
                isActive={false}
                word={translation.word}
                selectedVoice={availableVoices.find(
                  (voice_) => voice_.voiceURI === translation.voiceURI
                )}
              />
              <Divider variant="list_entry" />
              <StyledWordFields>{translation.translated}</StyledWordFields>
            </StyledContainer>
            <StyledContainer variant="icons">
              <FavoriteButton
                variant="favorite"
                id={translation.id}
                isFavorite={translation.isFavorite}
                onToggleFavorite={handleToggleFavorite}
              />
              {!selectedLanguage ? (
                <StyledLanguageLine>{translation.language}</StyledLanguageLine>
              ) : (
                ""
              )}
              <ButtonWithIcon
                buttonVariant="seeMore"
                someVariant="seeMore"
                width="2.5rem"
                aria-label="seeMore"
                onClick={() => router.push(`/words/${translation.id}`)}
              />
            </StyledContainer>
          </ListEntry>
        ))}
      </StyledList>
    </>
  );
}
const StyledWordFields = styled.p`
  padding: 0;
  margin: 0;
  word-wrap: break-word;
  white-space: pre-line;
`;
const StyledLanguageLine = styled.small`
  text-transform: uppercase;
  _padding: 0;
  _margin: 0;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ variant }) => {
    if (variant === "text") {
      return css`
        justify-content: flex-start;
        align-items: flex-start;
      `;
    }
    if (variant === "icons") {
      return css`
        justify-content: flex-end;
        align-items: flex-end;
      `;
    }
    if (variant === "notes") {
      return css``;
    }
  }}
`;
