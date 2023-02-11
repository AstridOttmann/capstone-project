import StyledForm from "../Form/StyledForm";
import StyledButton from "../Buttons/StyledButton";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import targetLanguages from "@/public/targetLanguages";
import ListEntry from "../ListEntry";
import SaveButton from "../Buttons/SaveButton";
import DeleteButton from "../Buttons/DeleteButton";
import translationListAtom from "@/public/store";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";

export default function TranslationForm() {
  const [translationList, setTranslationList] = useAtom(translationListAtom);
  const [translation, setTranslation] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [wordInput, setWordInput] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(`/api/deepl`, {
        method: "POST",
        body: JSON.stringify({
          text: data.text,
          target_lang: data.target_lang,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        //    console.log("result", result);

        setTranslation(result.requestedTranslation.translations[0].text);
        setDetectedLanguage(
          result.requestedTranslation.translations[0].detected_source_language
        );
        setWordInput(data.text);

        event.target.reset();
      } else console.error(`Error: ${response.status}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <StyledContainer>
      <StyledForm variant="translate" onSubmit={handleSubmit}>
        <label htmlFor="text">Enter word</label>
        <input
          id="text"
          name="text"
          onChange={() => {
            setTranslation("");
          }}
        />
        <label htmlFor="target_lang">Enter target language</label>
        <select name="target_lang" aria-label="target_language">
          {targetLanguages.map((language) => {
            return (
              <option key={language.target_lang} value={language.target_lang}>
                {language.target_lang} {language.language}
              </option>
            );
          })}
        </select>
        {!translation && (
          <StyledButton type="submit" variant="submit">
            Translate
          </StyledButton>
        )}
      </StyledForm>
      {translation && (
        <>
          <ListEntry>
            <StyledWordFields>{wordInput}</StyledWordFields>
            <small>({detectedLanguage})</small>
            <StyledWordFields>{translation}</StyledWordFields>
          </ListEntry>
          <DeleteButton onDeleteEntry={() => setTranslation("")} />
          <SaveButton
            onClick={() => {
              setTranslationList([
                {
                  id: nanoid(),
                  voiceURI: "",
                  word: wordInput,
                  language: detectedLanguage,
                  translated: translation,
                },
                ...translationList,
              ]);
              setTranslation("");
            }}
          />
        </>
      )}
    </StyledContainer>
  );
}
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4rem;
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
const StyledWordFields = styled.p`
  word-wrap: break-word;
  white-space: pre-line;
`;
const StyledContainer = styled.div`
  margin-bottom: 5rem;
`;
