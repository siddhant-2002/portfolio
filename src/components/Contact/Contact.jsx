import React from 'react';
import styles from './Contact.module.css';
import facebookLogo from '../../../assets/contact/emailIcon.png'; // replace with your image path
import twitterLogo from '../../../assets/contact/githubIcon.png'; // replace with your image path
import linkedinLogo from '../../../assets/contact/linkedinIcon.png'; // replace with your image path
import instagramLogo from '../../../assets/contact/instagram.png';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/yourusername">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/yourusername">
          <img src={twitterLogo} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/yourusername">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href="https://www.linkedin.com/in/yourusername">
          <img src={instagramLogo} alt="instagram" />
        </a>
      </div>
      <hr />
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Siddhant
      </div>
    </footer>
  );
};


