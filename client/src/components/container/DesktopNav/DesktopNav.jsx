import React from "react";
import { Logo, SocialIcons, NavLinks, ThemeToggle } from "../../../components";
import styles from "./DesktopNav.module.css";

function DesktopNav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <NavLinks navType="desktop" />
      </div>
      <div className={styles.theme}>
        <ThemeToggle />
      </div>
      <div className={styles.social}>
        <SocialIcons />
      </div>
    </div>
  );
}

export default DesktopNav;
