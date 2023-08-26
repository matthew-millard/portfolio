import React from "react";
import { useAppContext } from "../../../hooks/AppContext";
import { Logo, NavToggle } from "../../../components";
import styles from "./MobileNav.module.css";

function MobileNav() {
  const { navOpen, toggleNav } = useAppContext();
  return (
    <div className={styles.mobileNavContainer}>
      <Logo />
      <NavToggle navOpen={navOpen} toggleNav={toggleNav} />
    </div>
  );
}

export default MobileNav;
