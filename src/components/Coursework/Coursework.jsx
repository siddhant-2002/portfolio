import React from "react";

import styles from "./Coursework.module.css";
import skills from "../../data/coursework.json";
// import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

export const Coursework = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Coursework</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <button className="button">
                  <p>{skill.title}</p>
                </button>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
