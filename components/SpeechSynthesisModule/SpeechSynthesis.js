import ButtonWithIcon from "../Buttons/ButtonWithIcon";

function handleSpeech(text, selectedVoice) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
}

export default function SpeechSynthesis({ word, selectedVoice }) {
  return (
    <>
      <ButtonWithIcon
        buttonVariant="speaker"
        someVariant="speaker"
        width="2rem"
        aria-label="speaker"
        onClick={() => {
          handleSpeech(word, selectedVoice);
        }}
      />
    </>
  );
}
