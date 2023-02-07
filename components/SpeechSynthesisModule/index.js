import SpeechSynthVoiceSelector from "./SpeechSynthVoiceSelector";
import SpeechSynthesis from "./SpeechSynthesis";
import styled from "styled-components";

export default function SpeechSynthesisModule({
  availableVoices,
  onSubmit,
  word,
  selectedVoice,
}) {
  return (
    <>
      <StyledSpechSynthContainer>
        <SpeechSynthVoiceSelector
          availableVoices={availableVoices}
          onSubmit={onSubmit}
        />
        <SpeechSynthesis word={word} selectedVoice={selectedVoice} />
      </StyledSpechSynthContainer>
    </>
  );
}

const StyledSpechSynthContainer = styled.article`
  position: relative;
  border: 1px dashed lightgrey;
  border-radius: 10px;
  margin: 1em;
  padding: 0.5em;
  list-style: none;
`;
