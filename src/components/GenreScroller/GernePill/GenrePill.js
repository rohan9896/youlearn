import React from "react";
import styles from "./GenrePill.module.css";

export const GenrePill = ({ genre, isSelected }) => {
  return (
    <div
      style={
        isSelected
          ? {
              backgroundColor: "#e4e4e7",
              color: "#262626",
            }
          : {
              backgroundColor: "#262626",
              color: "#e4e4e7",
            }
      }
      className={styles.genrePill}
    >
      {genre}
    </div>
  );
};
