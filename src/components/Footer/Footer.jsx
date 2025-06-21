import React from "react";
import styles from "./Footer.module.css";
import emailIcon from "../../../assets/contact/emailIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
import instagramIcon from "../../../assets/contact/instagram.png";

export const Footer = () => {
  return (
    <footer id="Footer" className={styles.container}>
      <div className={styles.socialMedia}>
        <a
          href="mailto:siddhant@example.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <img src={emailIcon} alt="Email" />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
      <hr className={styles.divider} />
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Siddhant
      </div>
    </footer>
  );
};
