import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const initialTranslations = [
  {
    id: "1",
    word: "verjaardag",
    language: "Dutch",
    translated: "Geburtstag",
  },
  {
    id: "2",
    word: "uitnodigen",
    language: "Dutch",
    translated: "einladen",
  },
  {
    id: "6",
    word: "come va",
    language: "Italian",
    translated: "wie geht es dir?",
  },
  {
    id: "3",
    word: "verrassing",
    language: "Dutch",
    translated: "Überraschung",
    voice: "Google Nederlands",
  },
  {
    id: "4",
    word: "schattig",
    language: "Dutch",
    translated: "niedlich",
    voice: "Google Nederlands",
  },
  {
    id: "5",
    word: "moe",
    language: "Dutch",
    translated: "müde",
    voice: "Google Nederlands",
  },
  {
    id: "7",
    word: "mangiare fuori",
    language: "Italian",
    translated: "essen gehen",
    voice: "Alice",
  },
  {
    id: "8",
    word: "io",
    language: "Italian",
    translated: "ich",
    voice: "Alice",
  },
  {
    id: "9",
    word: "ik",
    language: "Dutch",
    translated: "ich",
    voice: "Google Nederlands",
  },
  {
    id: "10",
    word: "spiaggia",
    language: "Italian",
    translated: "Strand",
    voice: "Alice",
  },
  {
    id: "11",
    word: "dimmi",
    language: "Italian",
    translated: "sag mir",
    voice: "Alice",
  },
  {
    id: "12",
    word: "gisteren",
    language: "Dutch",
    translated: "gestern",
    voice: "Google Nederlands",
  },
  {
    id: "13",
    word: "slapen",
    language: "Dutch",
    translated: "schlafen",
    voice: "Google Nederlands",
  },
  {
    id: "14",
    word: "dormire",
    language: "Italian",
    translated: "schlafen",
    voice: "Alice",
  },
  {
    id: "15",
    word: "skön",
    language: "Swedish",
    translated: "schön",
  },
  {
    id: "16",
    word: "Hoe gaat het?",
    language: "Dutch",
    translated: "Wie geht es dir?",
    voice: "Google Nederlands",
  },
  {
    id: "17",
    word: "Hej, hvordan har du det?",
    language: "Danish",
    translated: "Hallo, wie geht es dir?",
    voice: "Sara",
  },
];

const sortedList = initialTranslations.slice().sort((a, b) => {
  const wordA = a.word.toLowerCase();
  const wordB = b.word.toLowerCase();
  if (wordA < wordB) {
    return -1;
  }
  if (wordA > wordB) {
    return 1;
  }
  return 0;
});

const translationListAtom = atomWithStorage("translationList", sortedList);
export default translationListAtom;
