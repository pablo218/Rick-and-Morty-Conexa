import React, { useEffect, useState, useContext } from "react";
import { CharacterSection } from "Components/CharactersSection/CharacterSection";
import { EpisodeContext } from "Context/EpidodeContext/EpisodeContext";
import styles from "./Characters.module.scss";

export const Characters = () => {
  const { setSharedEpisodes, clearSharedEpisodes } = useContext(EpisodeContext);
  const [aliveSelected, setAliveSelected] = useState(null);
  const [deadSelected, setDeadSelected] = useState(null);

  useEffect(() => {
    if (aliveSelected && deadSelected) {
      setSharedEpisodes();
    } else {
      clearSharedEpisodes(false);
    }
  }, [aliveSelected, deadSelected, setSharedEpisodes, clearSharedEpisodes]);

  return (
    <section className={styles.characterSection}>
      <div>
        <CharacterSection
          status={"Alive"}
          selected={aliveSelected}
          setSelected={setAliveSelected}
        />
      </div>
      <div className={styles.right}>
        <CharacterSection
          status={"Dead"}
          selected={deadSelected}
          setSelected={setDeadSelected}
        />
      </div>
    </section>
  );
};
