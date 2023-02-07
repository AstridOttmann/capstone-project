import Form from "@/components/Form";
import { useAtom } from "jotai";
import globalTranslations from "@/public/store";
import { useRouter } from "next/router";
import CancelEditButton from "@/components/Buttons/CancelEditButton";
import { useState } from "react";
import EditButton from "@/components/Buttons/EditButton";
import SingleEntry from "@/components/SingleEntry";
import GoBackButton from "@/components/Buttons/GoBackButton";
import ToastMessage from "@/components/ToastMessage";
import SpeechSynthesisModul from "@/components/SpeechSynthesisModul";

export default function SingleWordPage({ availableVoices }) {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [isShowMode, setIsShowMode] = useState(true);
  const [languageInput, setLanguageInput] = useState("");
  const [toast, setToast] = useState("exit");

  const router = useRouter();
  const { id } = router.query;

  // submits the selected language for speechSynthesis
  function handleSelectSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { voiceURI } = Object.fromEntries(formData);
    setLanguageInput(voiceURI);
    console.log("data", voiceURI);
  }
  // sets the language for speechSynth
  const selectedVoice = availableVoices.find(
    (voice_) => voice_.name === languageInput
  );
  console.log("sel", selectedVoice);

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
    setToast("enter");
    setTranslationList(
      translationList.filter((translation) => translation.id !== id)
    );
    //router.push("/words");

    setTimeout(exitToast, 2000);
  }

  function exitToast() {
    setToast("exit");
  }

  return (
    <main>
      <>
        <h1>Word entry {!isShowMode && ": edit"}</h1>
        <ToastMessage toast={toast} />
        {isShowMode ? (
          <EditButton onClick={() => setIsShowMode(false)} />
        ) : (
          <CancelEditButton onClick={() => setIsShowMode(true)} />
        )}
        {entry && (
          <>
            <SpeechSynthesisModul
              word={entry.word}
              selectedVoice={selectedVoice}
              availableVoices={availableVoices}
              onSubmit={(event) => handleSelectSubmit(event)}
            />
            <SingleEntry
              isFavorite={entry.isFavorite}
              word={entry.word}
              language={entry.language}
              translated={entry.translated}
              notes={entry.notes}
              voice={entry.voice}
              selectedVoice={availableVoices.find(
                (voice_) => voice_.name === languageInput
              )}
              availableVoices={availableVoices}
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
    </main>
  );
}
