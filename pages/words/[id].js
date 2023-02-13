import Form from "@/components/Form";
import { useAtom } from "jotai";
import translationListAtom from "@/public/store";
import { useRouter } from "next/router";
import { useState } from "react";
import SingleEntry from "@/components/SingleEntry";
import ToastMessage from "@/components/ToastMessage";
import SpeechSynthesis from "@/components/SpeechSynthesisModule/SpeechSynthesis";
import ButtonWithIcon from "@/components/Buttons/ButtonWithIcon";
import StyledTitle from "@/components/Titles/StyledTitle";

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
    <>
      <div>
        <StyledTitle>Word entry {!isShowMode && ": edit"}</StyledTitle>
        {!entry && <p>Please choose a word</p>}
        <ToastMessage toast={toast} />
      </div>
      <div>
        {isShowMode ? (
          <ButtonWithIcon
            buttonVariant="edit"
            someVariant="pencil"
            width="1.8rem"
            aria-label="pencil"
            onClick={() => setIsShowMode(false)}
          />
        ) : (
          <ButtonWithIcon
            buttonVariant="discard"
            someVariant="cancel"
            width="2rem"
            aria-label="cancel"
            onClick={() => setIsShowMode(true)}
          />
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
      </div>
      <div>
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
        {isShowMode && (
          <ButtonWithIcon
            buttonVariant="goBack"
            someVariant="goBack"
            width="2.3rem"
            aria-label="goBack"
            onClick={() => router.push("/words")}
          />
        )}
        {entry && (
          <ButtonWithIcon
            buttonVariant="delete"
            someVariant="bin"
            aria-label="bin"
            width="1.8rem"
            onClick={() => handleDeleteEntry(entry.id)}
          />
        )}
      </div>
    </>
  );
}
