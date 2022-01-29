import React from 'react';
import styles from "./PrimaryButton.module.css";

export function PrimaryButton({title, onPress, textColor, bgColor}) {
  return (
    <button style={{color: textColor, backgroundColor: bgColor}} onClick={onPress} className={styles.btn}>
        {title}
    </button>
  );
}
