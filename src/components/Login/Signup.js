import React from "react";
import styles from "./Login.module.css";
import utilityStyles from "../../core/utility.module.css";
import {
  EmailInput,
  OutlinedButton,
  PasswordInput,
  SubmitInput,
  TextInput,
} from "../../core";
import SignupHero from "../../assets/images/login_hero.svg";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className={`${styles.login}`}>
      <div className={styles.login__image}>
        <img src={SignupHero} alt="Signup hero" />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${utilityStyles.flex} ${utilityStyles.flexDirectionColumn} ${utilityStyles.alignItemsCenter} ${utilityStyles.justifyContentCenter}`}
      >
        <h2>SIGN UP</h2>
        <div className={styles.login__inputContainer}>
          <TextInput placeholderText={"Username"} />
          <EmailInput placeholderText={"Email"} />
          <PasswordInput placeholderText={"Password"} />
        </div>
        <SubmitInput
          title={"Sign Up"}
          textColor={"#f8fafc"}
          bgColor={"#0284c7"}
        />
        <div
          className={`${styles.login__registerHereContainer} ${utilityStyles.flex} ${utilityStyles.alignItemsCenter}`}
        >
          <p>Already a user?</p>
          <OutlinedButton onPress={() => navigate(`/login`)} textColor={"#0284c7"} title={"Login"} />
        </div>
      </form>
    </div>
  );
}
