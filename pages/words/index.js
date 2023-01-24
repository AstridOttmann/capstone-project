import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import ListEntry from "@/components/ListEntry";
import StyledList from "@/components/List/StyledList";
import StyledButton from "@/components/Button/StyledButton";
import BinIcon from "@/components/Icons/Bin";
import SVGIcon from "@/components/Icons/SVGIcon";

export default function WordsPage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);

  function handleDeleteEntry(id) {
    setTranslationList(translationList.filter((entry) => entry.id !== id));
  }

  return (
    <>
      <main>
        <StyledList>
          {translationList.map((translation) => (
            <ListEntry key={translation.id}>
              <p>{translation.word}</p>
              <small>({translation.language})</small>
              <p>{translation.translated}</p>
              <StyledButton
                type="delete"
                onClick={() => handleDeleteEntry(translation.id)}
              >
                <SVGIcon variant="bin" width="1.5rem" color="red" />
              </StyledButton>
            </ListEntry>
          ))}
        </StyledList>
      </main>
    </>
  );
}
