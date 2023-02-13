import StyledButton from "../Buttons/StyledButton";
import { useRouter } from "next/router";
import StyledForm from "./StyledForm";
import storedVoices from "@/public/voices";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

export default function Form({
  onSubmitEvent,
  onFirstInput,
  entry,
  isEditMode,
  availableVoices,
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
      voiceURI: data.voiceURI,
    });
    event.target.reset();
    event.target.elements.word.focus();
  }

  return (
    <>
      <StyledForm
        variant={isEditMode ? "edit" : "add"}
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="word">{isEditMode ? "Edit word" : "Enter word"}</label>
        <input
          type="text"
          id="word"
          name="word"
          required
          defaultValue={isEditMode ? entry.word : ""}
          pattern="^[^\s0-9].*$"
          maxLength="40"
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
          // pattern="^[^\s]\S+$"
          maxLength="12"
        />
        <label>Choose voice for Speech Synthesis</label>
        <select
          name="voiceURI"
          aria-label="select-voice"
          defaultValue={isEditMode && entry.voiceURI}
        >
          {storedVoices.map((voice) => {
            return (
              <option key={voice.name} value={voice.name}>
                {voice.name} {voice.lang}
              </option>
            );
          })}
        </select>
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
          maxLength="40"
        />
        {isEditMode && (
          <>
            <label htmlFor="notes">Add notes ...</label>
            <textarea
              id="notes"
              name="notes"
              rows="5"
              defaultValue={entry.notes}
            ></textarea>
          </>
        )}
        <ButtonWithIcon
          type="submit"
          buttonVariant="basic"
          someVariant="disc"
          width="2.5rem"
        />
      </StyledForm>
    </>
  );
}
