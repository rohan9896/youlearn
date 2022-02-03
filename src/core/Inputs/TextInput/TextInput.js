import React from "react";
import styles from "./TextInput.module.css";

export function TextInput({ placeholderText }) {
  return (
    <input
      className={styles.input}
      type={"text"}
      placeholder={placeholderText ?? ""}
    />
  );
}
