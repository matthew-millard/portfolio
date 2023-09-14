import React, { useState } from "react";
import { SubmitButton } from "../../components";
import utilStyles from "../../styles/utilities.module.css";
import styles from "./ForgotPassword.module.css";

function ForgotPassword() {
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");

  const handleChange = ({ target: { value } }) => {
    setEmailAddress(value);
  };

  const handleBlur = ({ target: { value } }) => {
    setEmailAddressError(value ? "" : "This field is required");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sent email to reset password");
  };
  return (
    <div className={`${utilStyles.minHeight} ${styles.resetPasswordContainer}`}>
      <div className={styles.heading}>
        <h1>Password Reset</h1>
        <p>
          To reset your password, please enter the email associated with your admin account. We'll
          send you a link to create a new one.
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.formFieldContainer}>
          <div className={`${styles.inputGroup} ${styles.firstNameInput}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              // disabled={loading}
              required
            />
            <p className={emailAddressError ? utilStyles.error : utilStyles.errorHidden}>
              {emailAddressError}
            </p>
          </div>
          <div className={styles.submitButtonContainer}>
            <SubmitButton text={"Send"} handleSubmit={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
