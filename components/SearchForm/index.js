import { useState } from "react";
import StyledForm from "../Form/StyledForm";
import StyledList from "../List/StyledList";
import { atom, useAtom } from "jotai";
import translationListAtom from "@/public/store";
import styled from "styled-components";
import Link from "next/link";
import Divider from "../Divider";
import Message from "../Message";
import RoutingLink from "../Message/RoutingLink";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

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
            placeholder="🔍"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </StyledInputWrapper>
        <ButtonWithIcon
          buttonVariant="reset"
          someVariant="reset"
          width="1.5rem"
          aria-label="reset"
          onClick={() => setSearchInput("")}
        />
      </StyledForm>
      {searchResults.length === 0 && searchInput.length > 0 ? (
        <StyledArticle>
          <Message>Not found</Message>
        </StyledArticle>
      ) : null}
      {searchInput.length > 0 && (
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
                    {translation.word} -
                    {!selectedLanguage ? (
                      <small>({translation.language}) - </small>
                    ) : (
                      ""
                    )}
                    {translation.translated}
                  </Message>
                  <RoutingLink href={`/words/${translation.id}`} />
                </StyledArticle>
              );
            })}
          <Divider />
        </StyledList>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
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

const StyledInputWrapper = styled.div`
  flex-grow: 4;
`;
const StyledInput = styled.input`
  width: 100%;
`;
