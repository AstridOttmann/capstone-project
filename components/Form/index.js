import styled from "styled-components";
import StyledButton from "../Button/StyledButton";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export default function Form({ onAddTranslations, onFirstInput }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddTranslations({
      word: data.word,
      language: data.language,
      translated: data.translated,
    });

    event.target.reset();
    event.target.elements.word.focus();
  }

  return (
    <>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="word">Enter word</label>
        <input
          type="text"
          id="word"
          name="word"
          required
          pattern="^[^\sa0-9].*$"
          maxLength="30"
          onChange={(event) => onFirstInput(event)}
        />
        <label htmlFor="language">Enter source language</label>
        <input
          type="text"
          id="language"
          name="language"
          required
          pattern="^[^\sa0-9].*$"
          maxLength="30"
        />
        <label htmlFor="translated">Enter translation</label>
        <input
          type="text"
          id="translated"
          name="translated"
          required
          pattern="^[^\sa0-9].*$"
          maxLength="30"
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}

// pattern="[a-zA-ZäöüÄÖÜ][a-zA-ZäöüÄÖÜ\s,.-/]*"
