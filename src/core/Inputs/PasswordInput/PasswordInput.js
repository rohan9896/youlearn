import React from "react";
import styles from './PasswordInput.module.css';

export function PasswordInput({placeholderText}) {
  return (
    <input
      className={styles.input}
      type={"password"}
      placeholder={placeholderText ?? ""}
    />
  );
}
