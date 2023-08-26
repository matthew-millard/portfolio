import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialIcons.module.css";
import { socialIcons } from "./socialIcons";

function SocialIcons() {
  return (
    <div className={styles.iconsContainer}>
      <ul aria-label="Social media links" className={styles.iconList}>
        {socialIcons.map(({ id, url, brand }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={brand}>
              <FontAwesomeIcon icon={brand} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
