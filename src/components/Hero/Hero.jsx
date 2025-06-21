import React from "react";
import { Link } from "react-router-dom";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <div className={styles.herodiv}>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Siddhant Deshmukh </h1>
          <h2 className={styles.tagline}>
            Full Stack Developer | Open Source Contributor | ML Enthusiast
          </h2>
          <p className={styles.description}>
            I build impactful web apps, contribute to open source, and love
            solving real-world problems through code.
          </p>
          <div className={styles.buttonContainer}>
            <Link
              className={styles.heroButton}
              to="/projects"
              aria-label="Explore My Work"
            >
              🔗 Explore My Work
            </Link>
            <a
              className={styles.heroButton}
              href="https://drive.google.com/file/d/1APwZfvoo2XfJhVL4c4-5GeK1UqHLHDyF/view?usp=sharing"
              aria-label="Download Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Resume
            </a>
            <a
              className={styles.heroButton}
              href="#contact"
              aria-label="Contact Me"
            >
              💌 Contact Me
            </a>
          </div>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        {/* <div className={styles.topBlur} />
        <div className={styles.bottomBlur} /> */}
      </section>
    </div>
  );
};
