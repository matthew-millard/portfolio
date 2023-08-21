import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/pro-light-svg-icons";
import styles from "./NavToggle.module.css";

function NavToggle({ navOpen, toggleNav }) {
  const icon = navOpen ? faXmark : faBars;

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleNav}
      aria-label={navOpen ? "Close off-canvas menu" : "Open off-canvas menu"}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default NavToggle;
