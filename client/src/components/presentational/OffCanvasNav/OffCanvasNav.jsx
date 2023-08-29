import React from "react";
import { ThemeToggle, NavLinks } from "../../../components";
import styles from "./OffCanvasNav.module.css";

function OffCanvasNav({ isOpen }) {
  return (
    <div className={`${styles.offCanvasContainer} ${isOpen ? styles.open : ""}`}>
      <div className={styles.themeToggle}>
        <ThemeToggle />
      </div>
      <div className={styles.navLinksContainer}>
        <NavLinks navType="mobile" />
      </div>
    </div>
  );
}

export default OffCanvasNav;
