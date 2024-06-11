import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <div className={styles.herodiv}>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Siddhant</h1>
          <p className={styles.description}>
            I'm a Engineer with 1 year of experience Web Developement. Reach out if you'd like to learn more!
          </p>
          <a href="https://drive.google.com/file/d/1APwZfvoo2XfJhVL4c4-5GeK1UqHLHDyF/view?usp=sharing" className={styles.contactBtn}>
            Know More...!
          </a>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </div>

  );
};
