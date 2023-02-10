import FavoriteButton from "../Buttons/FavoriteButton";
import Divider from "../Divider";
import ListEntry from "../ListEntry";
import styled from "styled-components";

export default function SingleEntry({ entry, onToggleFavorite }) {
  return (
    <>
      <ListEntry>
        <FavoriteButton
          isFavorite={entry.isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledWordFields>{entry.word}</StyledWordFields>
        <small>{entry.language} / </small>
        <small>voice: {entry.voiceURI}</small>
        <StyledWordFields>{entry.translated}</StyledWordFields>
        <Divider />
        <p>My notes: </p>
        <StyledNotes>{entry.notes}</StyledNotes>
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
