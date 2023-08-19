import React from "react";
import { ThemeToggle } from "../../presentational";

function Header({ theme, onToggleTheme }) {
  return (
    <header>
      <ThemeToggle currentTheme={theme} onToggle={onToggleTheme} />
    </header>
  );
}

export default Header;
