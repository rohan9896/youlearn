import React, { useRef, useState } from "react";
import styles from "./VideoCardGrid.module.css";

export const VideoCardGrid = (children) => {
  return <div className={styles.VideoCardGrid}>{children}</div>;
};
