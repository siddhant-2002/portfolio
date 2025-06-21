import React from "react";

import styles from "./Studies.module.css";

// import Studies from "../../data/Study.json";
// import { Study } from "./Study";

export const Studies = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>Studies</div>
      <div className={styles.section}>
        <div className={styles.diva}>
          <h2 className={styles.degreeTitle}>Bachelor's Degree</h2>
          <p className={styles.school}>Sinhgad College Of Engineering, Pune</p>
          <hr className={styles.divider} />
          <p className={styles.info}>
            <span role="img" aria-label="cgpa">
              📊
            </span>{" "}
            Current CGPA: <b>8.42</b>
          </p>
          <p className={styles.info}>
            <span role="img" aria-label="branch">
              💻
            </span>{" "}
            Information Technology
          </p>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>
            <h3 className={styles.degreeTitle}>🏆 SSC Boards</h3>
            <p className={styles.school}>
              Jawahar Navodaya Vidyalaya, Ahmednagar
            </p>
            <hr className={styles.divider} />
            <p className={styles.info}>
              <span role="img" aria-label="score">
                📈
              </span>{" "}
              Scored <b>86.4%</b>
            </p>
          </div>
          <div className={styles.div1}>
            <h3 className={styles.degreeTitle}>🎯 HSC Boards</h3>
            <p className={styles.school}>
              Jawahar Navodaya Vidyalaya, Ahmednagar
            </p>
            <hr className={styles.divider} />
            <p className={styles.info}>
              <span role="img" aria-label="score">
                📈
              </span>{" "}
              Scored <b>90%</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
