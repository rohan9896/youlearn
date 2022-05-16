import React from "react";
import { PrimarySpinner } from "../../Spinner";
import styles from "./SubmitInput.module.css";

export function SubmitInput({ title, textColor, bgColor, loading, ...props }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      className={styles.btn}
      {...props}
    >
      {loading ? <PrimarySpinner varient={"extra-small"} /> : title}
    </button>
  );
}
