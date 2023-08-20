import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, OffCanvasNav } from "./components";
import styles from "./App.module.css";

function App() {
  const [theme, setTheme] = useState("dark"); // Theme state set to dark by default
  const [navOpen, setNavOpen] = useState(false); // Nav state set to false by default

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Close or open the nav
  const toggleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  return (
    <div className={styles.appContainer} data-theme={theme}>
      <OffCanvasNav isOpen={navOpen} />
      <div className={styles.header}>
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          onToggleNav={toggleNav}
          navOpen={navOpen}
        />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      {/* Overlay When Nav off-canvas navbar is open */}
      <div
        className={`${styles.overlay} ${navOpen ? styles.overlayVisible : ""}`}
        onClick={toggleNav}
      ></div>
    </div>
  );
}

export default App;
