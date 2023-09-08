import React from "react";
import { NavLink } from "react-router-dom";
import links from "./links";
import styles from "./NavLinks.module.css";

function NavLinks({ navType }) {
  const navClass = navType === "mobile" ? styles.mobileNav : styles.desktopNav;
  const listClass = navType === "mobile" ? styles.mobileNavList : styles.desktopNavList;
  const listItemClass = navType === "mobile" ? styles.mobileNavListItem : styles.desktopNavListItem;
  return (
    <nav className={navClass} aria-label="Main navigation" role="navigation">
      <ul className={listClass}>
        {links.map((link) => (
          <li key={link.id} className={listItemClass}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
