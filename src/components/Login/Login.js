import React from "react";
import styles from "./Login.module.css";
import utilityStyles from "../../core/utility.module.css";
import { EmailInput, PasswordInput, SubmitInput } from "../../core";

export function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={`${utilityStyles.flex} ${utilityStyles.flexDirectionColumn} ${utilityStyles.alignItemsCenter}`}>
      <h2>
        LOGIN
      </h2>
      <div className={styles.inputContainer}>
        <EmailInput placeholderText={"Email"} />
        <PasswordInput placeholderText={"Password"} />
      </div>
      <SubmitInput title={"Login"} textColor={"#f8fafc"} bgColor={"#0284c7"} />
    </form>
  );
}
