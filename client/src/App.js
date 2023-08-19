import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/container";
import styles from "./App.module.css";

function App() {
  const [theme, setTheme] = useState("dark"); // default theme is dark

  // toggleTheme function will be passed to the Header component
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={styles.appContainer} data-theme={theme}>
      <div className={styles.header}>
        <Header theme={theme} onToggleTheme={toggleTheme} />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
