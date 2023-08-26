import React from "react";
import { useAppContext } from "../../../hooks/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSunBright } from "@fortawesome/pro-light-svg-icons";
import { faMoon } from "@fortawesome/pro-duotone-svg-icons";
import styles from "./ThemeToggle.module.css";
import utilityStyles from "../../../styles/utilities.module.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <div>
      <button
        className={styles.toggleButton}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      >
        {theme === "dark" ? (
          <div className={`${utilityStyles.flexCenterColumn} ${styles.toggle}`}>
            <FontAwesomeIcon icon={faSunBright} />
          </div>
        ) : (
          <div className={`${utilityStyles.flexCenterColumn} ${styles.toggle}`}>
            <FontAwesomeIcon icon={faMoon} />
          </div>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
