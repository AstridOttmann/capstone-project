import { atom, useAtom } from "jotai";

const initialTranslations = [
  { id: 1, word: "verjaardag", language: "Dutch", translated: "Geburtstag" },
  { id: 2, word: "uitnodigen", language: "Dutch", translated: "einladen" },
  {
    id: 6,
    word: "come va",
    language: "Italian",
    translated: "wie geht es dir?",
  },
  { id: 3, word: "verrassing", language: "Dutch", translated: "Überraschung" },
  { id: 4, word: "schattig", language: "Dutch", translated: "niedlich" },
  { id: 5, word: "moe", language: "Dutch", translated: "müde" },
  {
    id: 7,
    word: "mangiare fuori",
    language: "Italian",
    translated: "essen gehen",
  },
  { id: 8, word: "io", language: "Italian", translated: "ich" },
  { id: 9, word: "ik", language: "Dutch", translated: "ich" },
  { id: 10, word: "spiaggia", language: "Italian", translated: "Strand" },
  { id: 11, word: "dimmi", language: "Italian", translated: "sag mir" },
  { id: 12, word: "gisteren", language: "Dutch", translated: "gestern" },
  { id: 13, word: "slapen", language: "Dutch", translated: "schlafen" },
  { id: 14, word: "dormire", language: "Wolof", translated: "schlafen" },
  {
    id: 15,
    word: "nopp nala",
    language: "Italian",
    translated: "ich liebe dich",
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

const globalTranslations = atom(sortedList);
export default globalTranslations;
