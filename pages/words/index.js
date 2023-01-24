import { atom, useAtom } from "jotai";
import globalTranslations from "@/public/store";
import ListEntry from "@/components/ListEntry";
import MainNavigation from "@/components/MainNavigation";
import Header from "@/components/Header";
import StyledList from "@/components/List/StyledList";

export default function WordsPage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);

  return (
    <>
      <Header />
      <main>
        <StyledList>
          {translationList.map((translation) => (
            <ListEntry key={translation.id}>
              <p>{translation.word}</p>
              <small>({translation.language})</small>
              <p>{translation.translated}</p>
            </ListEntry>
          ))}
        </StyledList>
      </main>
      <MainNavigation />
    </>
  );
}
