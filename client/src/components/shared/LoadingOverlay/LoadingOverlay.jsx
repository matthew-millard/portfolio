import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./LoadingOverlay.module.css";

function LoadingOverlay() {
  return (
    <div className={styles.overlay}>
      <ClipLoader color="#ffffff" />
    </div>
  );
}

export default LoadingOverlay;
