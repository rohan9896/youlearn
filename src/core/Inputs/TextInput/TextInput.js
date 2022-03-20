import React, { forwardRef } from "react";
import styles from "./TextInput.module.css";

export const TextInput = forwardRef(({ placeholderText, onChange, ...props }, ref) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      ref={ref}
      type={"text"}
      placeholder={placeholderText ?? ""}
      {...props}
    />
  );
});
