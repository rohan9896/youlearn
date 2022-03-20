import React, { useState, forwardRef } from "react";
import styles from "./EmailInput.module.css";

export const EmailInput = forwardRef(({ placeholderText, onChange, ...props }, ref) => {
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
    onChange && onChange(e);
  }

  return (
    <input
      value={email}
      onChange={handleInputChange}
      ref={ref}
      className={styles.input}
      style={changeColorIfInvalidEmail(isEmailValid, email)}
      type={"email"}
      placeholder={placeholderText ?? ""}
      {...props}
    />
  );
})
