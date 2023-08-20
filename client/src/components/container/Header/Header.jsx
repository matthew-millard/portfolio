import React, { useState, useEffect } from "react";
import { ThemeToggle, NavToggle, DesktopNav } from "../../../components";
import styles from "./Header.module.css";

function Header({ theme, onToggleTheme, navOpen, onToggleNav }) {
  // State to track mobile view based on screen width
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 1200px)").matches);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1200px)");

    const handleMediaChange = (e) => {
      setIsMobile(e.matches); // Update mobile view state based on media query match
    };

    mql.addEventListener("change", handleMediaChange);

    // Cleanup the event listener to prevent memory leaks
    return () => {
      mql.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      {isMobile ? (
        <>
          <ThemeToggle currentTheme={theme} onToggle={onToggleTheme} />
          <NavToggle navOpen={navOpen} onToggle={onToggleNav} />
        </>
      ) : (
        <DesktopNav />
      )}
    </header>
  );
}

export default Header;
