import React from "react";
import styles from "./Projects.module.css";
import utilStyles from "../../styles/utilities.module.css";
import { projects } from "./projectData";

function Projects() {
  return (
    <div className={`${styles.container} ${utilStyles.minHeight}`}>
      <h1 className={styles.title}>Projects</h1>
      {projects.map((project, index) => {
        return (
          <div key={index} className={`${styles[project.className]} ${styles.projects}`}>
            <a href={project.url}>
              <img src={project.img} alt={project.alt} />
              <div className={styles.overlay}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <div className={styles.iconsContainer}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    {/* <FontAwesomeIcon icon={socialIcons[0].brand} /> */}
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    {/* <FontAwesomeIcon icon={otherIcons[0].iconName} /> */}
                  </a>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
