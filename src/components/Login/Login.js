import React, { useRef, useState } from "react";
import styles from "./Login.module.css";
import utilityStyles from "../../core/utility.module.css";
import {
  EmailInput,
  OutlinedButton,
  PasswordInput,
  SubmitInput,
} from "../../core";
import LoginHero from "../../assets/images/login_hero.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import { loginCall } from "../../context/authContext/apiCalls";

export const Login = () => {
  const email = useRef();
  const password = useRef();

  const { isFetching, error, dispatch } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    email.current.value = "";
    password.current.value = "";
  };

  const navigate = useNavigate();

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
          <EmailInput ref={email} placeholderText={"Email"} />
          <PasswordInput ref={password} placeholderText={"Password"} />
        </div>
        <SubmitInput
          title={"Login"}
          textColor={"var(--primary-white)"}
          bgColor={"var(--sky-blue)"}
          disabled={isFetching}
          loading={isFetching}
        />
        {error != "" && <p className={styles.errorMsg}>{error}</p>}
        <div
          className={`${styles.login__registerHereContainer} ${utilityStyles.flex} ${utilityStyles.alignItemsCenter}`}
        >
          <p>New here?</p>
          <OutlinedButton
            onPress={() => navigate(`/signup`)}
            textColor={"#0284c7"}
            title={"Register Here"}
          />
        </div>
      </form>
    </div>
  );
};
