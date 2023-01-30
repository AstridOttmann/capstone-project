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
import styled from "styled-components";
import FavoriteButton from "@/components/Button/FavoriteButton";
import EditButton from "@/components/Button/EditButton";
import DeleteButton from "@/components/Button/DeleteButton";

export default function WordsPage({ isFavorite }) {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const [toast, setToast] = useState("");

  const [favoriteFilter, setFavoriteFilter] = useState("all");

  function handleToggleFavorite(id) {
    setTranslationList(
      translationList.map((translation) =>
        translation.id === id
          ? { ...translation, isFavorite: !translation.isFavorite }
          : translation
      )
    );
  }

  // function checkFavorites(favorites, id) {
  //   return favorites.filter((favorite) => favorite.id === id);
  // }
  // console.log("id", id);
  // const isFaved = checkFavorites(favorites, id);
  // console.log("isFav", isFaved);

  // function handleFavorites(id) {
  //   if (isFaved) {
  //     setFavorites(favorites.filter((favorite) => favorite.id !== id));
  //   } else {
  //     setFavorites([...favorites, id]);
  //   }
  // }
  // console.log("Fav", favorites);
  // console.log("favorites.id", favorites.id);

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
      <StyledTitle>My words</StyledTitle>
      <StyledButton type="nav-favorite">
        <SVGIcon variant="likeActive" width="1.5rem"></SVGIcon>
      </StyledButton>
      <ToastMessage toast={toast} />
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
  margin-top: 3rem;
`;

{
  /* <StyledButton type="favorite" onClick={() => handleToggleFavorite}>
              <SVGIcon
                variant={isFavorite ? "likeActive" : "like"}
                width="1.5rem"
              ></SVGIcon>
            </StyledButton> */
}
