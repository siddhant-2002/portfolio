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
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>HACKTOBER FEST | Opensource Contribution</h3>
              <p>
              Enthusiastically participated in Hacktoberfest, actively engaging in
open-source contributions to enhance project functionalities
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>COGNIZANT GENCTECHNOVERSE | Digital Nurture Hackathon</h3>
              <p>
              Engaged in the Cognizant Hackathon reached the semifinal level.
Under mentor guidance
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
