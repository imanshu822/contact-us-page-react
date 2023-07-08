import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { isOutline, icon, text, onMouseOut, onMouseOver } = props;

  const handleMouseOver = (event) => {
    if (typeof onMouseOver === "function") {
      onMouseOver(event);
    }
  };

  const handleMouseOut = (event) => {
    if (typeof onMouseOut === "function") {
      onMouseOut(event);
    }
  };

  return (
    <button
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
