import SpeakerButton from "../Buttons/SpeakerButton";
import globalTranslations from "@/public/store";
import { useAtom } from "jotai";
import useVoices from "@/hooks/useVoices";
import { useState } from "react";
import StyledForm from "../Form/StyledForm";
import StyledButton from "../Buttons/StyledButton";

function handleSpeech(text, selectedVoice) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
}

export default function SpeechSynthesis({ word }) {
  const [languageInput, setLanguageInput] = useState("");

  const availableVoices = useVoices();

  console.log(availableVoices);

  function handleSelectSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { voiceURI } = Object.fromEntries(formData);
    setLanguageInput(voiceURI);
    console.log("data", voiceURI);
  }

  return (
    <>
      <form onSubmit={(event) => handleSelectSubmit(event)}>
        <select name="voiceURI">
          {availableVoices.map((voice) => {
            return (
              <option key={voice.name} value={voice.name}>
                {voice.name} {voice.lang}
              </option>
            );
          })}
        </select>
        <StyledButton>
          <p>set language</p>
        </StyledButton>
      </form>
      <SpeakerButton
        onClick={() => {
          const selectedVoice = availableVoices.find(
            (voice_) => voice_.name === languageInput
          );
          console.log("sel", selectedVoice);

          handleSpeech(word, selectedVoice);
        }}
      />
    </>
  );
}
