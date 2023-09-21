import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ text, link, color }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(link);
  };

  return (
    <button onClick={handleRedirect} className={styles.button} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

export default Button;
