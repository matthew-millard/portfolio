import React from "react";
import { ThemeToggle } from "../../presentational";

function Header({ theme, onToggleTheme }) {
  return (
    <header>
      <h1>Header</h1>
      <ThemeToggle currentTheme={theme} onToggle={onToggleTheme} />
    </header>
  );
}

export default Header;
