import StyledButton from "../Buttons/StyledButton";

export default function SpeechSynthLanguageSelector({
  availableVoices,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
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
  );
}
