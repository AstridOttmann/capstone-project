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
import styled from "styled-components";

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
        <ToastMessage toast={toast} />
        <StyledEntryHeader>
          {entry ? (
            <>
              <StyledTitle page="single">
                Word entry {!isShowMode && ": edit"}
              </StyledTitle>
              <StyledLanguageLine>{entry.language}</StyledLanguageLine>
            </>
          ) : (
            <>
              <ButtonWithIcon
                buttonVariant="goBack"
                someVariant="goBack"
                width="2.3rem"
                aria-label="goBack"
                onClick={() => router.push("/words")}
              />
              <p>Please choose a word</p>
            </>
          )}
        </StyledEntryHeader>
      </div>
      <div>
        {entry && (
          <>
            <SingleEntry
              entry={entry}
              isFavorite={entry.isFavorite}
              isActive="true"
              selectedVoice={availableVoices.find(
                (voice_) => voice_.voiceURI === entry.voiceURI
              )}
              onToggleFavorite={() => handleToggleFavorite(entry.id)}
              onDeleteEntry={() => handleDeleteEntry(entry.id)}
              onClick={() => setIsShowMode(false)}
            />
          </>
        )}
      </div>
      <div>
        {!isShowMode && entry && (
          <Form
            type="edit"
            entry={entry}
            isEditMode={true}
            onSubmitEvent={handleEditEntry}
          />
        )}
      </div>
    </>
  );
}
const StyledLanguageLine = styled.small`
  text-transform: uppercase;
  max-width: 50%
  min-with: fit-content;
  border-radius: 90px;
  padding: 0.2rem 0.4rem;
  border: 3px solid var(--dark-primary-color);
  font-size: 1.6rem;
  text-align: center;
`;
const StyledEntryHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.3rem 3rem 1rem 3rem;
  padding: 0 1rem 1rem 1rem;
`;
