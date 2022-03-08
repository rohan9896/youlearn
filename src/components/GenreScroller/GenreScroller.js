import React, { useEffect, useState } from "react";
import { getGenres } from "../../services/api.services";
import { GenrePill } from "./GernePill/GenrePill";
import styles from "./GenreScroller.module.css";

export const GenreScroller = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const genresData = await getGenres();
      console.log(genresData);
      setGenres(genresData);
    })();
  }, []);

  return (
    <div className={styles.GenreScroller}>
      {genres.map((item, index) => {
        return <GenrePill key={index} genre={item} isSelected={true} />;
      })}
    </div>
  );
};
