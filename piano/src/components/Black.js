import React, { useEffect } from "react";
import "../compCSS/Black.css";
import { notes, player } from "./notes.js";
import AudioPlayer from "./AudioPlayer";
function Black(props) {
  const handleClick = (e) => {
    console.log(e.target.className);
    player(props.keyName);
    if (
      (e.currentTarget.className =
        "black-div" && e.target.className !== "black-div")
    ) {
      e.currentTarget.className = "black-div1";
      e.target.className = "element-b";
    } else {
      e.target.className = "black-div1";
      e.target.children[0].className = "element-b";
    }
  };
  const handleup = (e) => {
    if (
      e.currentTarget.className === "black-div1" &&
      e.target.className !== "black-div1"
    ) {
      e.currentTarget.className = "black-div";
      e.target.className = "element-b";
    } else {
      e.target.className = "black-div";
      e.target.children[0].className = "element-b";
    }
  };
  const isDone = true;
  return (
    <button
      onMouseDown={handleClick}
      onMouseUp={handleup}
      className={props.black}
      style={{ marginLeft: `${props.marginProp}%` }}
    >
      <span className="element-b">{props.keyName}</span>
    </button>
  );
}
export default Black;
