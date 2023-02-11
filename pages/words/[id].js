import Form from "@/components/Form";
import { useAtom } from "jotai";
import translationListAtom from "@/public/store";
import { useRouter } from "next/router";
import CancelEditButton from "@/components/Buttons/CancelEditButton";
import { useState } from "react";
import EditButton from "@/components/Buttons/EditButton";
import SingleEntry from "@/components/SingleEntry";
import GoBackButton from "@/components/Buttons/GoBackButton";
import ToastMessage from "@/components/ToastMessage";
import DeleteButton from "@/components/Buttons/DeleteButton";
import SpeechSynthesis from "@/components/SpeechSynthesisModule/SpeechSynthesis";

export default function SingleWordPage({ availableVoices }) {
  const [translationList, setTranslationList] = useAtom(translationListAtom);
  const [isShowMode, setIsShowMode] = useState(true);
  const [toast, setToast] = useState("exit");

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
            voiceURI: editedEntry.voiceURI,
          };
        }
        return translation;
      })
    );
    setIsShowMode(true);
  }

  function handleToggleFavorite(id) {
    setTranslationList(
      translationList.map((translation) =>
        translation.id === id
          ? {
              ...translation,
              isFavorite: !translation.isFavorite,
            }
          : translation
      )
    );
  }

  function handleDeleteEntry(id) {
    setToast("enter");
    setTranslationList(
      translationList.filter((translation) => translation.id !== id)
    );
    setTimeout(exitToast, 2000);
  }

  function exitToast() {
    setToast("exit");
  }

  return (
    <main>
      <>
        <h1>Word entry {!isShowMode && ": edit"}</h1>
        {!entry && <p>Please choose a word</p>}
        <ToastMessage toast={toast} />
        {isShowMode ? (
          <EditButton onClick={() => setIsShowMode(false)} />
        ) : (
          <CancelEditButton onClick={() => setIsShowMode(true)} />
        )}
        {entry && (
          <>
            <SpeechSynthesis
              word={entry.word}
              selectedVoice={availableVoices.find(
                (voice_) => voice_.voiceURI === entry.voiceURI
              )}
            />
            <SingleEntry
              entry={entry}
              onToggleFavorite={() => handleToggleFavorite(entry.id)}
            />
          </>
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
      {isShowMode && <GoBackButton onClick={() => router.push("/words")} />}
      {entry && (
        <DeleteButton onDeleteEntry={() => handleDeleteEntry(entry.id)} />
      )}
    </main>
  );
}
