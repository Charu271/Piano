import React from "react";
import "../compCSS/White.css";
import { player } from "./notes.js";

function White(props) {
  let keyRef = React.createRef();
  const handleup = (e) => {
    if (
      e.currentTarget.className === "white-div1" &&
      e.target.className !== "white-div1"
    ) {
      e.currentTarget.className = "white-div";
      e.target.className = "element";
    } else {
      e.target.className = "white-div";
      e.target.children[0].className = "element";
    }
  };
  const handleClick = (e) => {
    player(props.keyName);
    if (
      (e.currentTarget.className =
        "white-div" && e.target.className !== "white-div")
    ) {
      e.currentTarget.className = "white-div1";
      e.target.className = "element";
    } else {
      e.target.className = "white-div1";
      e.target.children[0].className = "element";
    }
  };
  const handlePress = (e) => {
    console.log(e);
  };
  return (
    <div
      className={props.white}
      onKeyPress={handlePress}
      onMouseDown={handleClick}
      onMouseUp={handleup}
      ref={keyRef}
    >
      <span className="element">{props.keyName}</span>
    </div>
  );
}

export default White;
