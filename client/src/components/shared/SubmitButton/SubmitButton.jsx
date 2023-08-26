import React from "react";
import styles from "./SubmitButton.module.css";

function SubmitButton({ text, handleSubmit }) {
  return (
    <button className={styles.submitButton} type="submit" onClick={handleSubmit}>
      {text}
    </button>
  );
}

export default SubmitButton;
