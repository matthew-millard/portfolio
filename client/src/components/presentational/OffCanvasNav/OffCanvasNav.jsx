import React from "react";
import { ThemeToggle, NavLinks, SocialIcons, Logo } from "../../../components";
import styles from "./OffCanvasNav.module.css";

function OffCanvasNav({ isOpen }) {
  return (
    <div className={`${styles.offCanvasContainer} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <Logo />
      </div>
      <div className={styles.main}>
        <NavLinks navType="mobile" />
      </div>
      <div className={styles.footer}>
        <SocialIcons />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default OffCanvasNav;
