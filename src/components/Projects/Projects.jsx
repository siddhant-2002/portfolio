import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Miniproject } from "./Miniproject";
import minprojects from "../../data/minprojects.json";


export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Slider {...settings} className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </Slider>
      <h2 className={styles.title}>Mini Projects</h2>
      <br />
      <div className={styles.minp}>
      
      {minprojects.map((project, id) => (
        <div key={id} className={styles['project-card']}>
          <Miniproject project={project} />
        </div>
      ))}
    </div>
    </section>
  );
};
