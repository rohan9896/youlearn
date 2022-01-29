import React from "react";
import styles from "./TextButton.module.css";

export function TextButton({ title, onPress, textColor }) {
  return (
    <button className={styles.btn} onClick={onPress} style={{ color: textColor }}>
      {title}
    </button>
  );
}
