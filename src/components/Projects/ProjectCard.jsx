import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo },
}) => {
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

                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <li key={id} className={styles.skill}>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.links}>
                    <span href={demo} className={styles.link}>
                        Demo
                    </span>

                </div>
            </div>
        </div>
    );
};
