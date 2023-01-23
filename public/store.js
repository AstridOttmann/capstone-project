import { atom, useAtom } from "jotai";

const initialTranslations = [
  { id: 1, word: "verjaardag", translated: "Geburtstag" },
  { id: 2, word: "uitnodigen", translated: "einladen" },
  { id: 3, word: "verrassing", translated: "Überraschung" },
  { id: 4, word: "schattig", translated: "niedlich" },
  { id: 5, word: "moe", translated: "müde" },
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

const globalTranslations = atom(sortedList);
export default globalTranslations;
