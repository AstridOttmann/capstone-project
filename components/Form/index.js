import StyledButton from "../Buttons/StyledButton";
import { useRouter } from "next/router";
import StyledForm from "./StyledForm";
import storedVoices from "@/public/voices";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import styled from "styled-components";
import {
  StyledInput,
  StyledLabel,
  StyledButtonWrapper,
  StyledSelect,
  StyledTextarea,
} from "../FormElements";

export default function Form({
  onSubmitEvent,
  onFirstInput,
  entry,
  isEditMode,
  availableVoices,
  onClick,
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
        <label htmlFor="word"></label>
        <StyledInput
          type="text"
          id="word"
          name="word"
          required
          defaultValue={isEditMode ? entry.word : ""}
          placeholder="ENTER WORD"
          pattern="^[^\s0-9].*$"
          maxLength="40"
          onChange={!isEditMode ? onFirstInput : () => {}}
        />
        <label htmlFor="language"></label>
        <StyledInput
          type="text"
          id="language"
          name="language"
          required
          defaultValue={isEditMode ? entry.language : ""}
          placeholder="ENTER SOURCE LANGUAGE"
          pattern="^[^\s0-9].*$"
          // pattern="^[^\s]\S+$"
          maxLength="12"
        />
        <label htmlFor="translated"></label>
        <StyledInput
          type="text"
          id="translated"
          name="translated"
          required
          defaultValue={isEditMode ? entry.translated : ""}
          placeholder="ENTER TRANSLATION"
          pattern="^[^\s0-9].*$"
          maxLength="40"
        />
        <StyledLabel>Choose voice for Speech Synthesis</StyledLabel>
        <StyledSelect
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
        </StyledSelect>

        {isEditMode && (
          <>
            <StyledLabel htmlFor="notes">notes: </StyledLabel>
            <StyledTextarea
              id="notes"
              name="notes"
              rows="5"
              defaultValue={entry.notes}
            ></StyledTextarea>
            <ButtonWithIcon
              buttonVariant="discard"
              someVariant="cancel"
              width="2rem"
              aria-label="cancel"
              onClick={onClick}
            />
          </>
        )}
        <StyledButtonWrapper>
          <ButtonWithIcon
            type="submit"
            buttonVariant="save"
            someVariant="content_save"
            width="2rem"
          />
        </StyledButtonWrapper>
      </StyledForm>
    </>
  );
}
