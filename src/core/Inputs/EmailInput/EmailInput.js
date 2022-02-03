import React, { useState } from "react";
import styles from "./EmailInput.module.css";

export function EmailInput({ placeholderText }) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const checkEmailValidation = (email) => {
    let re = /^\S+@\S+$/;
    setIsEmailValid(re.test(email));
  }

  const changeColorIfInvalidEmail = (isEmailValid, email) => {
    if (!isEmailValid && email !== "") {
      return {
        borderColor: "red",
      };
    }
    return null;
  }

  const handleInputChange = (e) => {
    let text = e.target.value;
    setEmail(text);
    checkEmailValidation(e.target.value);
  }

  return (
    <input
      value={email}
      onChange={handleInputChange}
      className={styles.input}
      style={changeColorIfInvalidEmail(isEmailValid, email)}
      type={"email"}
      placeholder={placeholderText ?? ""}
    />
  );
}
