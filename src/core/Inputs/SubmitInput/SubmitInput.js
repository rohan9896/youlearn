import React from 'react';
import styles from "./SubmitInput.module.css";

export function SubmitInput({title, textColor, bgColor, ...props}) {
    return (
        <button style={{color: textColor, backgroundColor: bgColor}} className={styles.btn} {...props}>
            {title}
        </button>
      );
}
