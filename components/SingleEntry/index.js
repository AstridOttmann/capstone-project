import FavoriteButton from "../Buttons/FavoriteButton";
import Divider from "../Divider";
import styled from "styled-components";
import SpeechSynthesis from "../SpeechSynthesisModule/SpeechSynthesis";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

export default function SingleEntry({
  entry,
  onToggleFavorite,
  selectedVoice,
  onClick,
}) {
  return (
    <>
      <StyledSingleEntry>
        <div>
          <StyledWordFields>{entry.word}</StyledWordFields>
          <small>voice: {entry.voiceURI}</small>
          <SpeechSynthesis
            isActive="true"
            word={entry.word}
            selectedVoice={selectedVoice}
          />{" "}
          <Divider variant="single_entry" />
          <small>{entry.language} / </small>
          <StyledWordFields>{entry.translated}</StyledWordFields>
          <p>My notes: </p>
          <StyledNotes>{entry.notes}</StyledNotes>
        </div>
        <div>
          <SpeechSynthesis
            isActive="true"
            word={entry.word}
            selectedVoice={selectedVoice}
          />
          <FavoriteButton
            width="2rem"
            isFavorite={entry.isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
          <ButtonWithIcon
            buttonVariant="edit"
            someVariant="pencil"
            width="2rem"
            aria-label="pencil"
            onClick={onClick}
          />
          <ButtonWithIcon
            buttonVariant="single_page_bin"
            someVariant="bin"
            aria-label="bin"
            width="1.8rem"
            onClick={onClick}
          />
        </div>
      </StyledSingleEntry>
    </>
  );
}
const StyledNotes = styled.p`
  word-wrap: break-word;
  white-space: pre-line;
`;

const StyledWordFields = styled.p`
  word-wrap: break-word;
  white-space: pre-line;
`;
const StyledSingleEntry = styled.article`
  color: var(--primary-color);
  background: var(--dark-primary-color);
  border-radius: 40px;
  padding: 2rem;
  text-align: center;
`;
