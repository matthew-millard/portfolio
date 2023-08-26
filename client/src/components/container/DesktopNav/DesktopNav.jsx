import React from "react";
import { Logo, SocialIcons } from "../../../components";
import styles from "./DesktopNav.module.css";

function DesktopNav() {
  return (
    <div className={styles.navContainer}>
      <Logo />
      <SocialIcons />
    </div>
  );
}

export default DesktopNav;
