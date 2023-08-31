import React from "react";
import styles from "./CTAButton.module.css";

function CTAButton({ text, link, variant }) {
  return (
    <a href={link} className={`${styles.button} ${styles[variant]}`}>
      {text}
    </a>
  );
}

export default CTAButton;
