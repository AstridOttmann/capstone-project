import Form from "@/components/Form";
import { useAtom } from "jotai";
import globalTranslations from "@/public/store";
import { useRouter } from "next/router";
import CancelEditButton from "@/components/Buttons/CancelEditButton";
import { useState } from "react";
import EditButton from "@/components/Buttons/EditButton";
import SingleEntry from "@/components/SingleEntry";
import GoBackButton from "@/components/Buttons/GoBackButton";
import DeleteButton from "@/components/Buttons/DeleteButton";
import SpeakerButton from "@/components/Buttons/SpeakerButton";
import SpeechSynthesis from "@/components/SpeechSynthesis";

export default function SingleWordPage() {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [isShowMode, setIsShowMode] = useState(true);
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
            notes: editedEntry.notes,
          };
        }
        return translation;
      })
    );
    setIsShowMode(true);
  }
  function handleDeleteEntry() {
    setTranslationList(
      translationList.filter((translation) => translation.id !== id)
    );
    router.push("/words");
  }

  return (
    <main>
      <>
        <h1>Word entry {!isShowMode && ": edit"}</h1>
        {isShowMode ? (
          <EditButton onClick={() => setIsShowMode(false)} />
        ) : (
          <CancelEditButton onClick={() => setIsShowMode(true)} />
        )}
        {entry && (
          <SingleEntry
            isFavorite={entry.isFavorite}
            word={entry.word}
            language={entry.language}
            translated={entry.translated}
            notes={entry.notes}
            voice={entry.voice}
            // handlePlaySpeech={() => handlePlaySpeech(entry.voice, entry.word)}
            onDeleteEntry={handleDeleteEntry}
            onToggleFavorite={() =>
              setTranslationList(
                translationList.map((translation) =>
                  translation.id === id
                    ? {
                        ...translation,
                        isFavorite: !translation.isFavorite,
                      }
                    : translation
                )
              )
            }
          />
        )}
      </>
      {!isShowMode && (
        <>
          {entry && (
            <Form
              type="edit"
              entry={entry}
              isEditMode={true}
              onSubmitEvent={handleEditEntry}
            />
          )}
        </>
      )}
      <DeleteButton />
      {isShowMode && <GoBackButton onClick={() => router.push("/words")} />}
    </main>
  );
}
