import React from "react";
import { ThemeToggle, NavToggle } from "../../presentational";

function Header({ theme, onToggleTheme, navOpen, onToggleNav }) {
  return (
    <header>
      <ThemeToggle currentTheme={theme} onToggle={onToggleTheme} />
      <NavToggle navOpen={navOpen} onToggle={onToggleNav} />
    </header>
  );
}

export default Header;
