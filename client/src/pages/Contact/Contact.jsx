import React, { useState } from "react";
import { SubmitButton } from "../../components";
import isValidEmail from "../../utils/isValidEmail";
import styles from "./Contact.module.css";
import utilStyles from "../../styles/utilities.module.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleChange = ({ target: { id, value } }) => {
    switch (id) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmailAddress(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleBlur = ({ target: { id, value } }) => {
    if (!value) {
      switch (id) {
        case "firstName":
          setFirstNameError("This field is required");
          break;
        case "lastName":
          setLastNameError("This field is required");
          break;
        case "email":
          setEmailAddressError("This field is required");
          break;
        case "message":
          setMessageError("This field is required");
          break;
        default:
          break;
      }
    } else {
      switch (id) {
        case "firstName":
          setFirstNameError("");
          break;
        case "lastName":
          setLastNameError("");
          break;
        case "email":
          setEmailAddressError(isValidEmail(value) ? "" : "Invalid email address");
          break;
        case "message":
          setMessageError("");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.heading}>Contact</h1>
      <p className={styles.subHeading}>
        I'm always eager to discuss web projects or chat about tech! Don't hesitate to reach out via
        email or connect with me on social media.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formFieldContainer}>
          <div className={`${styles.inputGroup} ${styles.firstNameInput}`}>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <p className={firstNameError ? utilStyles.error : utilStyles.errorHidden}>
              {firstNameError}
            </p>
          </div>
          <div className={`${styles.inputGroup} ${styles.lastNameInput}`}>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <p className={lastNameError ? utilStyles.error : utilStyles.errorHidden}>
              {lastNameError}
            </p>
          </div>
          <div className={`${styles.inputGroup} ${styles.emailInput}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <p className={emailAddressError ? utilStyles.error : utilStyles.errorHidden}>
              {emailAddressError}
            </p>
          </div>
          <div className={`${styles.inputGroup} ${styles.messageInput}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <p className={messageError ? utilStyles.error : utilStyles.errorHidden}>
              {messageError}
            </p>
          </div>
        </div>
        {/* TODO: Create Button component */}
        <div className={styles.submitButtonContainer}>
          <SubmitButton text="Send" handleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default Contact;
