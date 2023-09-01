import React from "react";
import { Link } from "react-router-dom";
import { Copyright, SocialIcons } from "../../../components";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <ul className={styles.footerList}>
          <li>
            <a
              href="https://github.com/matthew-millard/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          </li>
          <li>
            <Link to="/my-setup">My Setup</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerSocialIcons}>
        <SocialIcons />
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
