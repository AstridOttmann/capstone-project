import SpeakerButton from "../Buttons/SpeakerButton";
import globalTranslations from "@/public/store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

// function handleSpeech(text, selectedVoice) {
//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.voice = selectedVoice;
//   speechSynthesis.speak(utterance);
// }

export default function SpeechSynthesis({ word, voice }) {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [availableVoices, setAvailableVoices] = useState([]);

  function handleSpeech(text, selectedVoice) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    function handleVoicesChanged() {
      const voices = speechSynthesis.getVoices();
      setAvailableVoices(voices);
    }
    speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
    };
  }, []);

  function handlePlaySpeech(voice, word) {
    const selectedVoice = availableVoices.find(
      (voice_) => voice_.name === voice
    );
    handleSpeech(word, selectedVoice);
  }

  return <SpeakerButton onClick={() => handlePlaySpeech(voice, word)} />;
}
