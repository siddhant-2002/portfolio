import React from "react";
import styles from "./Miniproject.module.css";
import { getImageUrl } from "../../utils";

export const Miniproject = ({ project: { title, imageSrc,link } }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.div1}> */}
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.links}>
          <span href={link} className={styles.link}>
            Demo
          </span>
        </div>
      {/* </div> */}
    </div>
  );
};
