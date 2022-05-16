import React from "react";
import styles from "./PrimarySpinner.module.css";

/**
 *
 * @param varient
 * @options - small, medium, large
 */

export function PrimarySpinner({ varient }) {
  let size;

  switch (varient) {
    case "extra-small":
      size = "1rem";
      break;
    case "small":
      size = "2rem";
      break;
    case "medium":
      size = "4rem";
      break;
    case "large":
      size = "6rem";
      break;
    default:
      size = "2rem";
      break;
  }

  return (
    <div style={{ width: size, height: size }} className={styles.spinner}></div>
  );
}
