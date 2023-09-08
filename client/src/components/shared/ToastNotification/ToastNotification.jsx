import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faExclamationCircle,
  faExclamationTriangle,
  faComments,
} from "@fortawesome/pro-light-svg-icons";
import styles from "./ToastNotification.module.css";

function ToastNotification({ message, type = "success", duration = 5000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  let icon;
  let containerStyle = styles.toastContainer;

  switch (type) {
    case "success":
      icon = faCircleCheck;
      containerStyle = `${styles.toastContainer} ${styles.success}`;
      break;
    case "error":
      icon = faExclamationCircle;
      containerStyle = `${styles.toastContainer} ${styles.error}`;
      break;
    case "warning":
      icon = faExclamationTriangle;
      containerStyle = `${styles.toastContainer} ${styles.warning}`;
      break;
    case "notification":
      icon = faComments;
      containerStyle = `${styles.toastContainer} ${styles.notification}`;
      break;
    default:
      icon = faCircleCheck;
      break;
  }

  return (
    <div className={containerStyle}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <p>{message}</p>
    </div>
  );
}

export default ToastNotification;
