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
//import SpeechSynthesisModule from "@/components/SpeechSynthesisModule";
import SpeechSynthesis from "@/components/SpeechSynthesisModule/SpeechSynthesis";

export default function SingleWordPage({ availableVoices }) {
  const [translationList, setTranslationList] = useAtom(globalTranslations);
  const [isShowMode, setIsShowMode] = useState(true);
  // const [voiceInput, setVoiceInput] = useState("");
  const [toast, setToast] = useState("exit");

  const router = useRouter();
  const { id } = router.query;

  const entry = translationList.find((translation) => {
    return translation.id === id;
  });

  // submits the selected language for SpeechSynthesis
  // function handleSelectSubmit(event) {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const { voiceURI } = Object.fromEntries(formData);
  //   setVoiceInput(voiceURI);
  // }
  // sets the language for SpeechSynth
  // const selectedVoice = availableVoices.find(
  //   (voice_) => voice_.name === voiceInput
  // );

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
  function handleDeleteEntry() {
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
            {/* <SpeechSynthesisModule
              word={entry.word}
              selectedVoice={availableVoices.find(
                (voice_) => voice_.voiceURI === entry.voiceURI
              )}
              availableVoices={availableVoices}
              onSubmit={(event) => handleSelectSubmit(event)}
            /> */}
            <SpeechSynthesis
              word={entry.word}
              selectedVoice={availableVoices.find(
                (voice_) => voice_.voiceURI === entry.voiceURI
              )}
            />
            <SingleEntry
              entry={entry}
              selectedVoice={availableVoices.find(
                (voice_) => voice_.voiceURI === entry.voiceURI
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
