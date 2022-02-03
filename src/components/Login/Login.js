import React from "react";
import styles from "./Login.module.css";
import utilityStyles from "../../core/utility.module.css";
import {
  EmailInput,
  OutlinedButton,
  PasswordInput,
  SubmitInput,
} from "../../core";
import LoginHero from "../../assets/images/login_hero.svg";

export function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.login}`}>
      <div className={styles.login__image}>
        <img src={LoginHero} alt="Login hero" />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${utilityStyles.flex} ${utilityStyles.flexDirectionColumn} ${utilityStyles.alignItemsCenter} ${utilityStyles.justifyContentCenter}`}
      >
        <h2>LOGIN</h2>
        <div className={styles.login__inputContainer}>
          <EmailInput placeholderText={"Email"} />
          <PasswordInput placeholderText={"Password"} />
        </div>
        <SubmitInput
          title={"Login"}
          textColor={"#f8fafc"}
          bgColor={"#0284c7"}
        />
        <div className={`${styles.login__registerHereContainer} ${utilityStyles.flex} ${utilityStyles.alignItemsCenter}`}>
          <p>New here?</p>
          <OutlinedButton title={"Register Here"} />
        </div>
      </form>
    </div>
  );
}
