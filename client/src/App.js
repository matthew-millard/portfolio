import React from "react";
import { AppProvider, useAppContext } from "./hooks/AppContext";
import { ToastProvider } from "./hooks/ToastContext";
import { AuthProvider } from "./hooks/AuthContext";
import { Outlet } from "react-router-dom";
import { Header, Footer, OffCanvasNav } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ToastProvider>
    </AppProvider>
  );
}

function AppContent() {
  const { theme, navOpen, toggleNav } = useAppContext();

  return (
    <div className={styles.appContainer} data-theme={theme}>
      <OffCanvasNav isOpen={navOpen} />
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <hr />
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
