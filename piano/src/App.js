import React, { useState, useEffect } from "react";
import "./App.css";
import White from "./components/White.js";
import Black from "./components/Black.js";
import AudioPlayer from "./components/AudioPlayer";
import { notes, player } from "./components/notes.js";
function App(props) {
  const [keyValue, setKeyValue] = useState(null);
  const [selectKey, setSelectKey] = useState(null);
  const [key, setKey] = useState("");
  const audioPlayer = AudioPlayer();
  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
    window.addEventListener("keydown", async (e) => {
      const val = e.key.toUpperCase();
      player(val);
      await setSelectKey(e.key.toUpperCase());
      setKey("C", console.log(key));

      console.log(val);
      console.log(selectKey);
      console.log("entered");
    });
    window.addEventListener("keyup", (e) => {
      setSelectKey(null);
      console.log(e);
      console.log("not-entered");
    });
  }, []);
  useEffect(() => {
    //console.log(keyValue);
  }, [keyValue]);
  const handleClick = () => {
    audioPlayer.playNote("C#1");
  };
  return (
    <div>
      <h1>Piano</h1>
      <div className="App">
        <White
          white={selectKey === "Q" ? "white-div1" : "white-div"}
          onClick={() => handleClick}
          keyName="Q"
        />
        <Black
          black={selectKey === "2" ? "black-div1" : "black-div"}
          keyName="2"
          marginProp={2.2}
        />
        <White
          white={selectKey === "W" ? "white-div1" : "white-div"}
          keyName="W"
        />
        <Black
          black={selectKey === "3" ? "black-div1" : "black-div"}
          keyName="3"
          marginProp={6.2}
        />
        <White
          white={selectKey === "E" ? "white-div1" : "white-div"}
          keyName="E"
        />
        <White
          white={selectKey === "R" ? "white-div1" : "white-div"}
          keyName="R"
        />
        <Black
          black={selectKey === "5" ? "black-div1" : "black-div"}
          keyName="5"
          marginProp={13.7}
        />
        <White
          white={selectKey === "T" ? "white-div1" : "white-div"}
          keyName="T"
        />
        <Black
          black={selectKey === "6" ? "black-div1" : "black-div"}
          keyName="6"
          marginProp={17.5}
        />
        <White
          white={selectKey === "Y" ? "white-div1" : "white-div"}
          keyName="Y"
        />
        <Black
          black={selectKey === "7" ? "black-div1" : "black-div"}
          keyName="7"
          marginProp={21.3}
        />
        <White
          white={selectKey === "U" ? "white-div1" : "white-div"}
          keyName="U"
        />
        <White
          white={selectKey === "I" ? "white-div1" : "white-div"}
          keyName="I"
        />
        <Black
          black={selectKey === "9" ? "black-div1" : "black-div"}
          keyName="9"
          marginProp={28.5}
        />
        <White
          white={selectKey === "O" ? "white-div1" : "white-div"}
          keyName="O"
        />
        <Black
          black={selectKey === "0" ? "black-div1" : "black-div"}
          keyName="0"
          marginProp={32.5}
        />
        <White
          white={selectKey === "P" ? "white-div1" : "white-div"}
          keyName="P"
        />
        <White
          white={selectKey === "Z" ? "white-div1" : "white-div"}
          keyName="Z"
        />
        <Black
          black={selectKey === "5" ? "black-div1" : "black-div"}
          keyName="S"
          marginProp={39.5}
        />
        <White
          white={selectKey === "X" ? "white-div1" : "white-div"}
          keyName="X"
        />
        <Black
          black={selectKey === "D" ? "black-div1" : "black-div"}
          keyName="D"
          marginProp={43.5}
        />
        <White
          white={selectKey === "C" ? "white-div1" : "white-div"}
          keyName="C"
        />
        <Black
          black={selectKey === "F" ? "black-div1" : "black-div"}
          keyName="F"
          marginProp={47.5}
        />
        <White
          white={selectKey === "V" ? "white-div1" : "white-div"}
          keyName="V"
        />
        <White
          white={selectKey === "B" ? "white-div1" : "white-div"}
          keyName="B"
        />
        <Black
          black={selectKey === "H" ? "black-div1" : "black-div"}
          keyName="H"
          marginProp={54.8}
        />
        <White
          white={selectKey === "N" ? "white-div1" : "white-div"}
          keyName="N"
        />
        <Black
          black={selectKey === "J" ? "black-div1" : "black-div"}
          keyName="J"
          marginProp={58.6}
        />
        <White
          white={selectKey === "M" ? "white-div1" : "white-div"}
          keyName="M"
        />
        <White
          white={selectKey === "," ? "white-div1" : "white-div"}
          keyName=","
        />
        <Black
          black={selectKey === "L" ? "black-div1" : "black-div"}
          keyName="L"
          marginProp={66}
        />
        <White
          white={selectKey === "." ? "white-div1" : "white-div"}
          keyName="."
        />
        <Black
          black={selectKey === ";" ? "black-div1" : "black-div"}
          keyName=";"
          marginProp={69.8}
        />
        <White
          white={selectKey === "/" ? "white-div1" : "white-div"}
          keyName="/"
        />
        <Black
          black={selectKey === "'" ? "black-div1" : "black-div"}
          keyName="'"
          marginProp={73.5}
        />
        <White
          white={selectKey === "A" ? "white-div1" : "white-div"}
          keyName="A"
        />
      </div>
    </div>
  );
}

export default App;
