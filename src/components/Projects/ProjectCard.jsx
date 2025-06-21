import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [expanded, setExpanded] = useState(false);
  const isArray = Array.isArray(description);
  const showReadMore = isArray && description.length > 2;
  const visibleDescription =
    isArray && !expanded ? description.slice(0, 2) : description;

  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.div2}>
        <div className={styles.description}>
          {isArray ? (
            visibleDescription.map((line, idx) => <p key={idx}>{line}</p>)
          ) : (
            <p>{description}</p>
          )}
          {showReadMore && (
            <button
              className={styles.readMoreBtn}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Demo
          </a>
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 Code
          </a>
        </div>
      </div>
    </div>
  );
};
