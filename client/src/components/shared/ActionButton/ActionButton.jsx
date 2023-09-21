import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./ActionButton.module.css";

const ActionButton = ({ text, backgroundColor, handleClick, isLoading }) => {
  return (
    <button style={{ backgroundColor }} className={styles.actionButton} onClick={handleClick}>
      {isLoading ? <ClipLoader aria-label="Loading Spinner" color={"white"} size={30} /> : text}
    </button>
  );
};

export default ActionButton;
