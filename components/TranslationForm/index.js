import StyledForm from "../Form/StyledForm";
import StyledButton from "../Buttons/StyledButton";
import { useState } from "react";
import StyledMessage from "../List/Message/StyledMessage";
import styled from "styled-components";
import Link from "next/link";
import SVGIcon from "../Icons/SVGIcon";
import targetLanguages from "@/public/targetLanguages";

export default function TranslationForm() {
  const [translation, setTranslation] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");

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
        console.log("result", result);
        setTranslation(result.requestedTranslation.translations[0].text);
        setDetectedLanguage(
          result.requestedTranslation.translations[0].detected_source_language
        );

        event.target.reset();
      } else console.error(`Error: ${response.status}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
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
        <StyledButton type="submit" variant="submit">
          Translate
        </StyledButton>
      </StyledForm>
      {translation && (
        <StyledSection>
          <StyledMessage>{translation}</StyledMessage>
          <small>lang: {detectedLanguage}</small>
          <StyledLink href="/">
            add to my words
            <SVGIcon
              variant="arrow_up"
              width="2rem"
              color="#04BF45"
              aria-label="arrow"
            />
          </StyledLink>
        </StyledSection>
      )}
    </>
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
