import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/pro-light-svg-icons";
import styles from "./NavToggle.module.css";

function NavToggle({ navOpen, onToggle }) {
  const icon = navOpen ? faXmark : faBars;

  return (
    <button
      className={styles.toggleButton}
      onClick={onToggle}
      aria-label={navOpen ? "Close off-canvas menu" : "Open off-canvas menu"}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default NavToggle;
