import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {history.map((historyItem, id) => {
          const [date, location] = historyItem.startDate
            .split("|")
            .map((s) => s.trim());
          return (
            <div key={id} className={styles.timelineItem}>
              <div className={styles.timelineLine} />
              <div className={styles.timelineDot}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className={styles.timelineLogo}
                />
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.org}>{historyItem.organisation}</h3>
                <div className={styles.role}>{historyItem.role}</div>
                <div className={styles.meta}>
                  {location && (
                    <span className={styles.location}>
                      <FaMapMarkerAlt /> {location}
                    </span>
                  )}
                  <span className={styles.date}>
                    <FaCalendarAlt /> {date}
                  </span>
                </div>
                <ul className={styles.experienceList}>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
