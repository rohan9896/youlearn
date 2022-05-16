import React from "react";
import styles from "./VideoCard.module.css";

export const VideoCard = () => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.videoCard__thumbnail}>
        <img
          alt="thumbnail"
          src={"https://i3.ytimg.com/vi/P_eh1b6vE-4/hqdefault.jpg"}
          loading="lazy"
        />
      </div>
      <div className={styles.videoCard__description}>
        <img
          alt="channel-logo"
          src={
            "https://yt3.ggpht.com/Hf8YZvGY0M1lgK7B-QUp9T3LHOxG1C2tJtvj9yADczCheYYfpvuCcurtecvBpLUrbgBH509z=s176-c-k-c0x00ffffff-no-rj"
          }
        />
      </div>
    </div>
  );
};
