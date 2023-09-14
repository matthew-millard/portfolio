import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADMIN_LOGIN } from "../../graphql/mutations";
import { SubmitButton } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useToast } from "../../hooks/ToastContext";
import utilStyles from "../../styles/utilities.module.css";
import styles from "./AdminLogin.module.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [adminLogin, { loading }] = useMutation(ADMIN_LOGIN);
  const { setToast } = useToast();
  const [icon, setIcon] = useState(faEyeSlash);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setIcon(showPassword ? faEyeSlash : faEye);
  };

  const handleChange = ({ target: { id, value } }) => {
    switch (id) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleBlur = ({ target: { id } }) => {
    switch (id) {
      case "username":
        setUsernameError(username ? "" : "This field is required");
        break;
      case "password":
        setPasswordError(password ? "" : "This field is required");
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsernameError("");
    setPasswordError("");
    try {
      const response = await adminLogin({
        variables: {
          username,
          password,
        },
      });

      if (!response.data.adminLogin.success) {
        setToast({ message: response.data.adminLogin.message, type: "error", duration: 5000 }); // unsuccessfully logged in
      } else {
        setUsername("");
        setPassword("");
        setToast({ message: response.data.adminLogin.message, type: "success", duration: 5000 }); // successfully logged in
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleForgotPassword = () => {
    navigate("/admin/forgot-password");
  };

  return (
    <div className={`${styles.adminContainer} ${utilStyles.minHeight}`}>
      <h1 className={styles.heading}>Admin Login</h1>
      <form className={styles.form}>
        <div className={styles.formFieldContainer}>
          <div className={`${styles.inputGroup} ${styles.firstNameInput}`}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={loading}
              required
              aria-label="Enter your username"
              aria-describedby="usernameError"
            />
            <p
              className={usernameError ? utilStyles.error : utilStyles.errorHidden}
              id="usernameError"
            >
              {usernameError}
            </p>
          </div>
          <div className={`${styles.inputGroup} ${styles.firstNameInput}`}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordInput}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={loading}
                required
                aria-label="Enter your password"
                aria-describedby="passwordError"
              />
              <button
                className={styles.passwordVisibilityButton}
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon icon={icon} />
              </button>
            </div>
            <p
              className={passwordError ? utilStyles.error : utilStyles.errorHidden}
              id="passwordError"
            >
              {passwordError}
            </p>
          </div>
          <div className={styles.submitButtonContainer}>
            <SubmitButton text={"Login"} handleSubmit={handleSubmit} disabled={loading} />
          </div>

          {/* forgot password code */}
          <p className={styles.forgotPasswordLink}>
            <button className={styles.linkButton} type="button" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
