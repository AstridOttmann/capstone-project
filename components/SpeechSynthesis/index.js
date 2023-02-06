import SpeakerButton from "../Buttons/SpeakerButton";
import globalTranslations from "@/public/store";
import { useAtom } from "jotai";
import useVoices from "@/hooks/useVoices";

function handleSpeech(text, selectedVoice) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
}

export default function SpeechSynthesis({ word, voice }) {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const availableVoices = useVoices();

  return (
    <SpeakerButton
      onClick={() => {
        const selectedVoice = availableVoices.find(
          (voice_) => voice_.name === voice
        );
        handleSpeech(word, selectedVoice);
      }}
    />
  );
}
