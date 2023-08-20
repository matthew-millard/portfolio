import React from "react";
import { ThemeToggle, NavToggle } from "../../presentational";
import styles from "./Header.module.css";

function Header({ theme, onToggleTheme, navOpen, onToggleNav }) {
  return (
    <header className={styles.headerContainer}>
      <ThemeToggle currentTheme={theme} onToggle={onToggleTheme} />
      <NavToggle navOpen={navOpen} onToggle={onToggleNav} />
    </header>
  );
}

export default Header;
