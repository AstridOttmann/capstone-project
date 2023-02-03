import StyledButton from "../Buttons/StyledButton";
import { useRouter } from "next/router";
import StyledForm from "./StyledForm";
//import styled from "styled-components";

export default function Form({
  onSubmitEvent,
  onFirstInput,
  entry,
  isEditMode,
}) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitEvent({
      word: data.word,
      language: data.language,
      translated: data.translated,
      notes: data.notes,
    });

    // if (isEditMode) {
    //   router.back();
    // }
    event.target.reset();
    event.target.elements.word.focus();
  }

  return (
    <>
      <StyledForm type="add-edit" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="word">{isEditMode ? "Edit word" : "Enter word"}</label>
        <input
          type="text"
          id="word"
          name="word"
          required
          defaultValue={isEditMode ? entry.word : ""}
          pattern="^[^\s0-9].*$"
          maxLength="30"
          onChange={!isEditMode ? onFirstInput : () => {}}
        />
        <label htmlFor="language">
          {isEditMode ? "Edit source language" : "Enter source language"}
        </label>
        <input
          type="text"
          id="language"
          name="language"
          required
          defaultValue={isEditMode ? entry.language : ""}
          pattern="^[^\s0-9].*$"
          maxLength="17"
        />
        <label htmlFor="translated">
          {isEditMode ? "Edit translation" : "Enter translation"}
        </label>
        <input
          type="text"
          id="translated"
          name="translated"
          required
          defaultValue={isEditMode ? entry.translated : ""}
          pattern="^[^\s0-9].*$"
          maxLength="30"
        />
        {isEditMode && (
          <>
            <label htmlFor="notes">Add notes ...</label>
            <textarea
              type="text"
              id="notes"
              name="notes"
              rows="5"
              defaultValue={entry.notes}
            ></textarea>
          </>
        )}
        <StyledButton type="submit">Save</StyledButton>
      </StyledForm>
    </>
  );
}

// const StyledTextarea = styled.textarea`
//   word-wrap: break-word;
//   white-space: pre-line;
// `;
