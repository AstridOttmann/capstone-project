import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";
import FavoriteButton from "../Buttons/FavoriteButton";
import Divider from "../Divider";
import ListEntry from "../ListEntry";
import styled from "styled-components";

export default function SingleEntry({
  word,
  language,
  translated,
  notes,
  isFavorite,
  onDeleteEntry,
  onToggleFavorite,
}) {
  return (
    <>
      <ListEntry>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <p>{word}</p>
        <small>({language})</small>
        <p>{translated}</p>
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
