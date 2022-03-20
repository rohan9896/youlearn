import React, { forwardRef } from "react";
import styles from './PasswordInput.module.css';

export const PasswordInput = forwardRef(({placeholderText, onChange, ...props}, ref) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      ref={ref}
      type={"password"}
      placeholder={placeholderText ?? ""}
      {...props}
    />
  );
})
