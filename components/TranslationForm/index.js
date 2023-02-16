import StyledForm from "../Form/StyledForm";
import { useState } from "react";
import targetLanguages from "@/public/targetLanguages";
import translationListAtom from "@/public/store";
import { useAtom } from "jotai";
import Message from "../Message";
import RoutingLink from "../Message/RoutingLink";
import { nanoid } from "nanoid";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import {
  StyledWordFields,
  StyledSelect,
  StyledInput,
  StyledLabel,
  StyledButtonWrapper,
  StyledLanguageLine,
} from "../FormElements";
import { StyledMessageArticle, StyledContainer } from "../StyledElements";

export default function TranslationForm() {
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
    <>
      <StyledForm
        autoComplete="off"
        variant="translate"
        onSubmit={handleSubmit}
      >
        <label htmlFor="text"></label>
        <StyledInput
          id="text"
          name="text"
          placeholder="ENTER WORD"
          onChange={() => {
            setTranslation("");
            setMessage("");
          }}
        />{" "}
        {/* <label htmlFor="language"></label>
        <StyledInput
          type="text"
          id="language"
          name="source_lang"
          placeholder="ENTER SOURCE LANGUAGE - optional -"
          pattern="^[^\s0-9].*$"
          // pattern="^[^\s]\S+$"
          maxLength="12"
        /> */}
        <StyledLabel htmlFor="source_lang">
          Choose source language - optional -{" "}
        </StyledLabel>
        <StyledSelect name="source_lang" aria-label="source-language">
          {targetLanguages.map((language) => {
            return (
              <option key={language.source_lang} value={language.source_lang}>
                {language.source_lang} {language.language}
              </option>
            );
          })}
        </StyledSelect>
        <StyledLabel htmlFor="target_lang">
          Choose target language - required -{" "}
        </StyledLabel>
        <StyledSelect name="target_lang" aria-label="target-language">
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
              someVariant="translate"
              width="2.5rem"
            />
          </StyledButtonWrapper>
        )}
      </StyledForm>
      {translation && (
        <>
          <StyledMessageArticle variant="translate">
            <StyledContainer variant="translation_entry">
              <StyledWordFields>{wordInput}</StyledWordFields>
              <StyledLanguageLine variant="translation_entry">
                {detectedLanguage}
              </StyledLanguageLine>
              <StyledWordFields>{translation}</StyledWordFields>
            </StyledContainer>

            <StyledButtonWrapper variant="translation_result">
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
              />{" "}
              <ButtonWithIcon
                buttonVariant="delete"
                someVariant="bin"
                width="1.8rem"
                aria-label="bin"
                onClick={() => setTranslation("")}
              />
            </StyledButtonWrapper>
          </StyledMessageArticle>
        </>
      )}
      {message && (
        <StyledMessageArticle>
          <Message>
            added word
            <RoutingLink href="/words" />
          </Message>
        </StyledMessageArticle>
      )}
    </>
  );
}
