import React from "react";

import styles from "./Achievements.module.css";
import { getImageUrl } from "../../utils";

export const Achievements = () => {
  return (
    <section className={styles.container} id="achievement">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3> PROGRAMMING | Problem solving</h3>
              <p>
                • Secured Global Rank 933(Div-4) in CodeChef Starters 130.
                <br />
                • Solved 350+ DSA Problems on Various Coding Platforms.
                <br />• 4-Star c++ Coder on HackerRank.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />

            <div className={styles.aboutItemText}>
              <h3> OPENSOURCE CONTRIBUTION | Hacktoberfest | GSSOC'24</h3>
              <p>
                • Hacktober Fest: Strengthened coding skills and gained
                experience in collaborative development.
                <br />• GSSOC’24: Developed technical skill sand gained valuable
                experience in web development and collaboration.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>COGNIZANT GENCTECHNOVERSE | Digital Nurture Hackathon</h3>
              <p>
                • Engaged in the Cognizant Hackathon reached the semifinal
                level, Under mentor guidance. our team worked on the Domain of
                Machine learning in HealthCare.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
