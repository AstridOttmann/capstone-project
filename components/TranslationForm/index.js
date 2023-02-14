import StyledForm from "../Form/StyledForm";
import StyledButton from "../Buttons/StyledButton";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import targetLanguages from "@/public/targetLanguages";
import ListEntry from "../ListEntry";
import translationListAtom from "@/public/store";
import { useAtom } from "jotai";
import Message from "../Message";
import RoutingLink from "../Message/RoutingLink";
import { nanoid } from "nanoid";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

export default function TranslationForm({ isActive }) {
  const [translationList, setTranslationList] = useAtom(translationListAtom);
  const [translation, setTranslation] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [wordInput, setWordInput] = useState("");
  const [message, setMessage] = useState("");

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
        <label htmlFor="text"></label>
        <StyledInput
          id="text"
          name="text"
          placeholder="ENTER WORD"
          onChange={() => {
            setTranslation("");
            setMessage("");
          }}
        />
        <StyledLabel htmlFor="target_lang">Enter target language</StyledLabel>
        <StyledSelect name="target_lang" aria-label="target_language">
          {targetLanguages.map((language) => {
            return (
              <option key={language.target_lang} value={language.target_lang}>
                {language.target_lang} {language.language}
              </option>
            );
          })}
        </StyledSelect>
        {!translation && (
          <StyledButtonWrapper>
            <ButtonWithIcon
              type="submit"
              buttonVariant="translate"
              isActive={isActive}
              someVariant="translate"
              width="2.5rem"
            />
          </StyledButtonWrapper>
        )}
      </StyledForm>
      {translation && (
        <>
          <ListEntry>
            <StyledWordFields>{wordInput}</StyledWordFields>
            <small>({detectedLanguage})</small>
            <StyledWordFields>{translation}</StyledWordFields>
          </ListEntry>
          <ButtonWithIcon
            buttonVariant="delete"
            someVariant="bin"
            width="1.8rem"
            aria-label="bin"
            onClick={() => setTranslation("")}
          />
          <ButtonWithIcon
            buttonVariant="basic"
            someVariant="content_save"
            width="1.8rem"
            aria-label="content_save"
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
              setMessage(true);
            }}
          />
        </>
      )}
      {message && (
        <Message>
          added word
          <RoutingLink href="/words" />
        </Message>
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
const StyledInput = styled.input`
  font-family: inherit;
  color: var(--dark-primary-color);
  font-size: 1rem;
  width: 100%;
  background: var(--primary-color);
  border: 4px solid var(--dark-primary-color);
  border-radius: 50px;
  padding: 0.5rem;
`;
const StyledLabel = styled.label`
  color: var(--primary-color);
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
`;
const StyledSelect = styled.select`
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
  width: 100%;
  background: var(--primary-color);
  border: none;
  border: 4px solid var(--dark-primary-color);
  border-radius: 50px;
  padding: 0.5rem;
`;
const StyledWordFields = styled.p`
  word-wrap: break-word;
  white-space: pre-line;
`;
const StyledContainer = styled.div`
  margin-bottom: 5rem;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
