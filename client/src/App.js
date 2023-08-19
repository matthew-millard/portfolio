import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/container";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.header}>
        <Header />
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
