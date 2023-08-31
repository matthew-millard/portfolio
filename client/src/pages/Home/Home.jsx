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
          Hello, I'm Matt. Welcome to my home on the internet. I have a huge affinity for all things
          tech related. I specialize in developing websites where user interaction is paramount and
          my expertise lies in React, GraphQL, and MongoDB.
        </h3>
      </div>
    </div>
  );
}

export default Home;
