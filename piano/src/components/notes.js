import AudioPlayer from "./AudioPlayer.js";
import { useEffect } from "react";

const audioPlayer = AudioPlayer();

audioPlayer.setInstrument("acoustic_grand_piano");
const notes = {
  Q: "C3",
  2: "C#3",
  W: "D3",
  3: "D#3",
  E: "E3",
  R: "F3",
  5: "F#3",
  T: "G3",
  6: "G#3",
  Y: "A3",
  7: "A#3",
  U: "B3",
  I: "C4",
  9: "C#4",
  O: "D4",
  0: "D#4",
  P: "E4",
  Z: "F4",
  S: "F#4",
  X: "G4",
  D: "G#4",
  C: "A4",
  F: "A#4",
  V: "B4",
  B: "C5",
  H: "C#5",
  N: "D5",
  J: "D#5",
  M: "E5",
  ",": "F5",
  L: "F#5",
  ".": "G5",
  ";": "G#5",
  "/": "A5",
  "'": "A#5",
  A: "B5",
};
const player = (args) => {
  if (notes.hasOwnProperty(args)) audioPlayer.playNote(notes[args]);
};
export { notes, player };
