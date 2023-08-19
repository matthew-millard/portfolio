import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleLargeOn, faToggleLargeOff } from "@fortawesome/pro-light-svg-icons";
import styles from "./ThemeToggle.module.css";
import utilityStyles from "../../../styles/utilities.module.css";

function ThemeToggle({ currentTheme, onToggle }) {
  return (
    <div>
      <button
        className={styles.toggleButton}
        onClick={onToggle}
        aria-label={`Switch to ${currentTheme === "dark" ? "Light" : "Dark"} Mode`}
      >
        {currentTheme === "dark" ? (
          <div className={`${utilityStyles.flexCenterColumn} ${styles.toggle}`}>
            <FontAwesomeIcon icon={faToggleLargeOn} />
            <span>Light Mode</span>
          </div>
        ) : (
          <div className={`${utilityStyles.flexCenterColumn} ${styles.toggle}`}>
            <FontAwesomeIcon icon={faToggleLargeOff} />
            <span>Dark Mode</span>
          </div>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
