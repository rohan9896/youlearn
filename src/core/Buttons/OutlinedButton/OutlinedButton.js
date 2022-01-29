import React from 'react';
import styles from "./OutlinedButton.module.css";

export function OutlinedButton({title, onPress, textColor, borderColor}) {
  return (
    <button style={{color: textColor, borderColor: borderColor ?? textColor}} onClick={onPress} className={styles.btn}>
        {title}
    </button>
  );
}