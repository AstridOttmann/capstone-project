import DeleteButton from "../Buttons/DeleteButton";
import FavoriteButton from "../Buttons/FavoriteButton";
import Divider from "../Divider";
import ListEntry from "../ListEntry";
import styled from "styled-components";

export default function SingleEntry({
  entry,
  onDeleteEntry,
  onToggleFavorite,
}) {
  return (
    <>
      <ListEntry>
        <FavoriteButton
          voice={entry.voice}
          isFavorite={entry.isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledWordFields>{entry.word}</StyledWordFields>
        <small>({entry.language})</small>
        <StyledWordFields>{entry.translated}</StyledWordFields>
        <Divider />
        <p>My notes: </p>
        <StyledNotes>{entry.notes}</StyledNotes>
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
