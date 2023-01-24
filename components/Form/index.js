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
          id="word"
          name="word"
          required
          onChange={(event) => onFirstInput(event)}
        />
        <label htmlFor="language">Enter source language</label>
        <input id="translated" name="language" required />
        <label htmlFor="translated">Enter translation</label>
        <input id="translated" name="translated" required />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}
