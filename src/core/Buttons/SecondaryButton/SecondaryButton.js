
import React from 'react';
import styles from "./SecondaryButton.module.css";

export function SecondaryButton({title, onPress, textColor, bgColor}) {
  return (
    <button style={{color: textColor, backgroundColor: bgColor}} onClick={onPress} className={styles.btn}>
        {title}
    </button>
  );
}