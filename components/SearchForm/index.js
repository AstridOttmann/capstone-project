import { useState } from "react";
import StyledForm from "../Form/StyledForm";
import StyledList from "../List/StyledList";
import { atom, useAtom } from "jotai";
import translationListAtom from "@/public/store";
import Message from "../Message";
import RoutingLink from "../Message/RoutingLink";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import { StyledArticle } from "../StyledElements";

import { StyledInput, StyledInputWrapper } from "../FormElements";

export default function SearchForm({ selectedLanguage }) {
  const [translationList] = useAtom(translationListAtom);
  const [searchInput, setSearchInput] = useState("");

  const searchResults = translationList
    .filter((translation) => {
      if (selectedLanguage) {
        return translation.language === selectedLanguage;
      }
      return true;
    })
    .filter(
      (translation) =>
        translation.word.toLowerCase().indexOf(searchInput.toLowerCase()) === 0
    );

  return (
    <>
      <StyledForm variant="search">
        <StyledInputWrapper>
          <label htmlFor="searchValue"></label>
          <StyledInput
            id="searchValue"
            name="searchValue"
            placeholder="🔍 SEARCH WORD"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </StyledInputWrapper>
        <ButtonWithIcon
          buttonVariant="reset"
          someVariant="reset"
          width="1.5rem"
          aria-label="reset"
          onClick={(event) => {
            setSearchInput("");
            event.preventDefault();
          }}
        />
      </StyledForm>
      {searchResults.length === 0 && searchInput.length > 0 ? (
        <StyledArticle>
          <Message>Not found</Message>
        </StyledArticle>
      ) : null}
      {searchInput.length > 0 ? (
        <StyledList>
          {searchResults
            // .filter((translation) => translation.word.includes(searchInput))
            .map((translation) => {
              return (
                <StyledArticle
                  key={translation.id}
                  onClick={() => {
                    setSearchInput(translation.word);
                  }}
                >
                  <Message>
                    {translation.word} - {translation.language.toUpperCase()} -
                    {translation.translated}
                  </Message>
                  <RoutingLink
                    color="var(--primary-color)"
                    href={`/words/${translation.id}`}
                  />
                </StyledArticle>
              );
            })}
        </StyledList>
      ) : null}
    </>
  );
}
