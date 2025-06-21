import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(
    window.location.hash || "#about"
  );

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || "#about");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievement", label: "Achievement" },
    { href: "#community", label: "Community" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <a className={styles.title} href="/" tabIndex={0} aria-label="Home">
        Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu icon"
          />
        </button>
        <ul
          id="navbar-menu"
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeHash === link.href ? styles.active : ""}
                aria-current={activeHash === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
