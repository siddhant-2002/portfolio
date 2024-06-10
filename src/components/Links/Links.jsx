import React from "react";

import styles from "./Links.module.css";
import skills from "../../data/links.json";
// import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Links = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Links</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <a key={id} href={skill.link} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title}  />
                </div>
                <p>{skill.title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
