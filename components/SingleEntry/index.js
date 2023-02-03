import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";
import FavoriteButton from "../Buttons/FavoriteButton";
import Divider from "../Divider";
import ListEntry from "../ListEntry";

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
        <p>{notes}</p>
        <DeleteButton onDeleteEntry={onDeleteEntry} />
      </ListEntry>
    </>
  );
}
