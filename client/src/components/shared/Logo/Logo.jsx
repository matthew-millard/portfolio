import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <span className={styles.logo}>Matt Millard</span>
    </Link>
  );
}

export default Logo;
