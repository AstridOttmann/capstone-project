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
  onDeleteEntry,
  isActive,
}) {
  return (
    <>
      <StyledSingleEntry>
        <div>
          <StyledWordFields>{entry.word}</StyledWordFields>
          <StyledVoiceContainer>
            <small>voice: {entry.voiceURI}</small>
            <SpeechSynthesis
              isActive={isActive}
              word={entry.word}
              selectedVoice={selectedVoice}
            />
          </StyledVoiceContainer>
          <Divider variant="single_entry" />
          {/* <small>{entry.language} / </small> */}
          <StyledWordFields>{entry.translated}</StyledWordFields>
        </div>
        <StyledNotesContainer>
          <p>NOTES: </p>
          <p>{entry.notes}</p>
        </StyledNotesContainer>
        <div>
          <FavoriteButton
            width="2rem"
            variant="favorite_bright"
            isFavorite={entry.isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
          <ButtonWithIcon
            buttonVariant="edit"
            someVariant="pencil"
            width="1.8rem"
            aria-label="pencil"
            onClick={onClick}
          />
          <ButtonWithIcon
            buttonVariant="single_page_bin"
            someVariant="bin"
            aria-label="bin"
            width="2rem"
            onClick={onDeleteEntry}
          />
        </div>
      </StyledSingleEntry>
    </>
  );
}
const StyledNotesContainer = styled.div`
  margin-bottom: 1rem;
  text-align: start;
  word-wrap: break-word;
  white-space: pre-line;
`;
const StyledVoiceContainer = styled.div`
  _text-transform: uppercase;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledWordFields = styled.p`
  font-size: 1.8rem;
  _padding: 0;
  margin: 0;
  word-wrap: break-word;
  white-space: pre-line;
`;

const StyledSingleEntry = styled.article`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 7rem;
  text-align: center;
  color: var(--primary-color);
  background: var(--dark-primary-color);
  opacity: 0.8;
  border-radius: 40px;
  padding: 2rem;
`;
