import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import ListEntry from "@/components/ListEntry";
import StyledList from "@/components/List/StyledList";
import { useEffect, useState } from "react";
import LanguageSelection from "@/components/LanguageSelection";
import { useRouter } from "next/router";
import ToastMessage from "@/components/ToastMessage";
import styled from "styled-components";
import FavoriteButton from "@/components/Buttons/FavoriteButton";
import EditButton from "@/components/Buttons/EditButton";
import DeleteButton from "@/components/Buttons/DeleteButton";
import ShowFavoritesButton from "@/components/Buttons/ShowFavoritesButton";
import SearchForm from "@/components/SearchForm";

export default function WordsPage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const [toast, setToast] = useState("");

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
      <StyledTitle>My words</StyledTitle>
      <ShowFavoritesButton
        favoriteFilter={favoriteFilter}
        isActive={favoriteFilter === true}
        onShowFavorites={handleShowFavorites}
      />
      <ToastMessage toast={toast} />
      <SearchForm translationList={filteredTranslations} />
      <StyledList>
        {filteredTranslations.map((translation) => (
          <ListEntry
            key={translation.id}
            id={translation.id}
            isFavorite={translation.isFavorite}
          >
            <FavoriteButton
              id={translation.id}
              isFavorite={translation.isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
            <p>{translation.word}</p>
            {!selectedLanguage ? <small>({translation.language})</small> : ""}
            <p>{translation.translated}</p>
            <EditButton
              onClick={() => router.push(`/words/${translation.id}`)}
            />
            <DeleteButton
              onDeleteEntry={() => handleDeleteEntry(translation.id)}
            />
          </ListEntry>
        ))}
      </StyledList>
    </main>
  );
}

const StyledTitle = styled.h1`
  margin-top: 3.2rem;
  font-size: 1.8rem;
`;
