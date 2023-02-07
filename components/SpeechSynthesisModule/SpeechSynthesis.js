import SpeakerButton from "../Buttons/SpeakerButton";

function handleSpeech(text, selectedVoice) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
}

export default function SpeechSynthesis({ word, selectedVoice }) {
  return (
    <>
      <SpeakerButton
        type="button"
        onClick={() => {
          handleSpeech(word, selectedVoice);
        }}
      />
    </>
  );
}
