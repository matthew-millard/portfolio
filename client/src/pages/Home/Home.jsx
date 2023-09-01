import React from "react";
import { CTAButton } from "../../components";
import headshot from "../../assets/images/matt_millard_headshot.jpg";
import styles from "./Home.module.css";
import utilStyles from "../../styles/utilities.module.css";

function Home() {
  return (
    <div className={`${utilStyles.minHeight} ${styles.homeContainer}`}>
      <h1 className={styles.mission}>
        Building Software that prioritizes all users, ensuring clarity, engagement, and purpose in
        every interaction.
      </h1>
      <div className={styles.headshot}>
        <img src={headshot} alt="Headshot of Matt Millard" />
      </div>
      <div className={styles.buttons}>
        <CTAButton text="About Me" link="/about" />
      </div>
      <div className={styles.intro}>
        <h3>
          Hello, I'm Matt. Welcome to my digital corner. I'm deeply passionate about tech,
          especially the magic of building ideas from scratch.
          <br />
          I've trained in developing web applications with a focus on user-centric design, primarily
          using React, GraphQL, and MongoDB.
        </h3>
        <CTAButton text="Projects" link="/projects" />
      </div>
    </div>
  );
}

export default Home;
