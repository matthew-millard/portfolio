import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleLargeOn, faToggleLargeOff } from "@fortawesome/pro-light-svg-icons";
import styles from "./ThemeToggle.module.css";

function ThemeToggle({ currentTheme, onToggle }) {
  return (
    <div>
      <button className={styles.toggle} onClick={onToggle}>
        {currentTheme === "dark" ? (
          <div className="flex-center-column">
            <FontAwesomeIcon icon={faToggleLargeOn} />
            <small>Light Mode</small>
          </div>
        ) : (
          <div className="flex-center-column">
            <FontAwesomeIcon icon={faToggleLargeOff} />
            <small>Dark Mode</small>
          </div>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
