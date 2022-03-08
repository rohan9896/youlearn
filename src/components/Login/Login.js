import React, {useState} from "react";
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

export function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          <EmailInput onChange={(e) => console.log(e.target.value)} placeholderText={"Email"} />
          <PasswordInput onChange={(e) => setFormData({
            ...formData,
            password: e.target.value
          })} placeholderText={"Password"} />
        </div>
        <SubmitInput
          title={"Login"}
          textColor={"#f8fafc"}
          bgColor={"#0284c7"}
        />
        <div
          className={`${styles.login__registerHereContainer} ${utilityStyles.flex} ${utilityStyles.alignItemsCenter}`}
        >
          <p>New here?</p>
          <OutlinedButton onPress={() => navigate(`/signup`)} textColor={"#0284c7"} title={"Register Here"} />
        </div>
      </form>
    </div>
  );
}
