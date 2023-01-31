import Form from "@/components/Form";
import { useAtom } from "jotai";
import globalTranslations from "@/public/store";
import { useRouter } from "next/router";
import CancelDeleteButton from "@/components/Buttons/CancelDeleteButton";

export default function SingleEntry() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const router = useRouter();
  const { id } = router.query;

  const entry = translationList.find((translation) => {
    return translation.id === id;
  });

  function handleEditEntry(editedEntry) {
    setTranslationList(
      translationList.map((translation) => {
        if (translation.id === id) {
          return {
            ...translation,
            word: editedEntry.word,
            language: editedEntry.language,
            translated: editedEntry.translated,
          };
        }
        return translation;
      })
    );
  }

  return (
    <>
      <main>
        <h1>Edit word</h1>
        <CancelDeleteButton onClick={() => router.back()} />
        {!entry ? null : (
          <Form
            entry={entry}
            isEditMode={true}
            onSubmitEvent={handleEditEntry}
          />
        )}
      </main>
    </>
  );
}
