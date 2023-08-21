import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../../../components";
import styles from "./OffCanvasNav.module.css";

function OffCanvasNav({ isOpen }) {
  return (
    <nav className={`${styles.offCanvasContainer} ${isOpen ? styles.open : ""}`}>
      <div className={styles.themeToggle}>
        <ThemeToggle />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default OffCanvasNav;
