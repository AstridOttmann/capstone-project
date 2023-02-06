import DeleteButton from "../Buttons/DeleteButton";
import FavoriteButton from "../Buttons/FavoriteButton";
import Divider from "../Divider";
import ListEntry from "../ListEntry";
import styled from "styled-components";
import SpeechSynthesis from "../SpeechSynthesis";
import SpeechSynthLanguageSelector from "../SpeechSynthesis/SpeechSynthLanguageSelector";

export default function SingleEntry({
  word,
  language,
  translated,
  voice,
  notes,
  isFavorite,
  onDeleteEntry,
  onToggleFavorite,
  availableVoices,
}) {
  return (
    <>
      <ListEntry>
        <SpeechSynthesis word={word} voice={voice} voices={availableVoices} />
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledWordFields>{word}</StyledWordFields>
        <small>({language})</small>
        <StyledWordFields>{translated}</StyledWordFields>
        <Divider />
        <p>My notes: </p>
        <StyledNotes>{notes}</StyledNotes>
        <DeleteButton onDeleteEntry={onDeleteEntry} />
      </ListEntry>
    </>
  );
}
const StyledNotes = styled.article`
  word-wrap: break-word;
  white-space: pre-line;
`;

const StyledWordFields = styled.p`
  word-wrap: break-word;
  white-space: pre-line;
`;
