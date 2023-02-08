import StyledButton from "../Buttons/StyledButton";

export default function SpeechSynthVoiceSelector({
  availableVoices,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <select name="voiceURI" aria-label="select-voice">
        {availableVoices.map((voice) => {
          return (
            <option key={voice.name} value={voice.name}>
              {voice.name} {voice.lang}
            </option>
          );
        })}
      </select>
      <StyledButton>
        <p>set voice</p>
      </StyledButton>
    </form>
  );
}
