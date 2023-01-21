import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export default function Form({ onAddTranslations }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Form", data);

    onAddTranslations({ word: data.word, translated: data.translated });

    event.target.reset();
    event.target.elements.word.focus();
  }

  return (
    <>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="word">Enter word</label>
        <input id="word" name="word" />
        <label htmlFor="translated">Enter translation</label>
        <input id="translated" name="translated" />
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}
