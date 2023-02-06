import StyledButton from "../Buttons/StyledButton";
import { useState } from "react";

export default function SpeechSynthLanguageSelector() {
  function handleSelectSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { voiceURI } = Object.fromEntries(formData);
    setLanguageInput(voiceURI);
    console.log("data", voiceURI);
  }
}
