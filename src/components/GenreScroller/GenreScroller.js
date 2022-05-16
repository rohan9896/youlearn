import React, { useEffect, useState } from "react";
import { getGenres } from "../../services/commonAPI.services";
import { GenrePill } from "./GernePill/GenrePill";
import styles from "./GenreScroller.module.css";
import { PrimarySpinner } from "../../core";
import utilityStyles from "../../core/utility.module.css";

export const GenreScroller = () => {
  const [genres, setGenres] = useState([]);
  // const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const genresData = await getGenres();
      console.log(genresData);
      setGenres(genresData);
    })();
  }, []);
  return (
    <div className={styles.GenreScroller}>
      {genres?.map((item, index) => {
        return (
          <GenrePill
            onClick={() => {}}
            key={index}
            genre={item}
            isSelected={true}
          />
        );
      })}
    </div>
  );
};
