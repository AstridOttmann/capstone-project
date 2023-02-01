import { useState } from "react";
import StyledButton from "../Buttons/StyledButton";
import StyledForm from "../Form/StyledForm";
import StyledList from "../List/StyledList";
import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import ListEntry from "../ListEntry";

export default function SearchForm() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [searchInput, setSearchInput] = useState("");
  const [searchWords, setSearchWords] = useState([]);

  const filteredEntries = translationList.filter(
    (translation) => translation.word.indexOf(searchInput) === 0
  );

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setSearchInput(data.searchValue);
    setSearchInput("");

    const searchResult = filteredEntries.find(
      (translation) => translation.word === data.searchValue
    );
    console.log("searchWords", searchWords);
    console.log("search", searchResult);

    setSearchWords(searchResult);
    console.log("searchWords2", searchWords);

    setTranslationList(searchResult);
    setSearchWords([]);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="searchValue"></label>
        <input
          id="searchValue"
          name="searchValue"
          placeholder="🔍"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        {/* <p>Searching for: {searchInput}</p> */}
        <StyledButton type="submit">Show</StyledButton>
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
                <div
                  key={translation.word}
                  onClick={() => {
                    setSearchInput(translation.word);
                  }}
                >
                  <StyledList>
                    <ListEntry>
                      <p>{translation.word}</p>
                      <small>({translation.language})</small>
                      <p>{translation.translated}</p>
                    </ListEntry>
                  </StyledList>
                </div>
              );
            })}
        </StyledList>
      )}
      {searchWords.length > 0 && (
        <StyledList>
          <ListEntry translationList={translationList}></ListEntry>
        </StyledList>
      )}
    </>
  );
}

{
  /* {searchWords.map((searchWord, word) => {
          return <ListEntry key={word}>{search}</ListEntry>;
        })} */
}

// translationList.filter((translation) => {
//     return translation === searchResult;
//   })
