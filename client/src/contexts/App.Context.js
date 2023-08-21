import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export const AppProvider = ({ children }) => {
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
    <AppContext.Provider value={{ theme, toggleTheme, navOpen, toggleNav }}>
      {children}
    </AppContext.Provider>
  );
};
