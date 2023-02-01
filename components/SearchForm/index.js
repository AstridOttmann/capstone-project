import { useState } from "react";
import StyledForm from "../Form/StyledForm";
import StyledList from "../List/StyledList";
import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import ListEntry from "../ListEntry";
//import { useRouter } from "next/router";
import SVGIcon from "../Icons/SVGIcon";
import styled from "styled-components";
import Link from "next/link";

export default function SearchForm({ selectedLanguage }) {
  const [translationList] = useAtom(globalTranslations);
  const [searchInput, setSearchInput] = useState("");
  //const [selectedLanguage] = useState("");

  //const router = useRouter();

  const filteredEntries = translationList
    // .filter((translation) => {
    //   if (selectedLanguage) {
    //     return translation.language === selectedLanguage;
    //   }
    //   return true;
    // })
    .filter((translation) => translation.word.indexOf(searchInput) === 0);
  //console.log("filterd", filteredEntries);

  return (
    <>
      <StyledForm>
        <label htmlFor="searchValue"></label>
        <input
          id="searchValue"
          name="searchValue"
          placeholder="🔍"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </StyledForm>
      {filteredEntries.length === 0 && searchInput.length > 0 ? (
        <p>Not found</p>
      ) : null}
      {searchInput.length > 0 && (
        <StyledList>
          {filteredEntries
            .filter((translation) => translation.word.includes(searchInput))
            .map((translation) => {
              return (
                <StyledSection
                  key={translation.word}
                  onClick={() => {
                    setSearchInput(translation.word);
                  }}
                >
                  <StyledMessage>
                    {translation.word} -{" "}
                    {!selectedLanguage ? (
                      <small>({translation.language}) - </small>
                    ) : (
                      ""
                    )}
                    {translation.translated}{" "}
                    <StyledLink href={`/words/${translation.id}`}>
                      edit entry
                      <SVGIcon
                        variant="arrow"
                        width="2rem"
                        color="#04BF45"
                        aria-label="variant"
                      />
                    </StyledLink>
                  </StyledMessage>
                </StyledSection>
              );
            })}
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

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  _text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  background: whitesmoke;
  _border: 1px dashed lightgrey;
  border-radius: 5px;
`;

const StyledMessage = styled.p`
  font-size: 1rem;
  margin: 0.5rem;
`;
