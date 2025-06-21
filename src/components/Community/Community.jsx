import React from "react";

import styles from "./Community.module.css";
// import skills from "../../data/skills.json";
import history from "../../data/community.json";
import { getImageUrl } from "../../utils";

export const Community = () => {
  return (
    <section className={styles.container} id="community">
      <h2 className={styles.title}>Community</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <div>
                    <h3>{historyItem.role}</h3>
                    <span> |</span>
                    <h3>{historyItem.organisation}</h3>
                  </div>
                  <p>{historyItem.startDate}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
