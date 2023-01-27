import Form from "@/components/Form";
import { useState } from "react";
import { useAtom } from "jotai";
import globalTranslations from "@/public/store";
import { useRouter } from "next/router";
import StyledButton from "@/components/Button/StyledButton";
import SVGIcon from "@/components/Icons/SVGIcon";

export default function SingleEntry() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const router = useRouter();
  const { id } = router.query;

  const entry = translationList.find((translation) => {
    return translation.id === id;
  });
  console.log("entry", entry);
  console.log("id", id);

  function handleCancelEdit() {
    router.back();
  }

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
        <StyledButton type="discard" onClick={handleCancelEdit}>
          <SVGIcon
            variant="cancel"
            width="2.5rem"
            color="#F27405"
            aria-label="cancel"
          ></SVGIcon>
        </StyledButton>
        <Form entry={entry} isEditMode={true} onSubmitEvent={handleEditEntry} />
      </main>
    </>
  );
}
