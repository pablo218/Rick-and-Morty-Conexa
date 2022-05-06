import React, { useContext } from "react";
import { EpisodeSection } from "Components/EpisodeSection/EpisodeSection";
import { EpisodeContext } from "Context/EpidodeContext/EpisodeContext";
import styles from "./Episodes.module.scss";

export const Episodes = () => {
  const { aliveEpisodes, deadEpisodes, sharedEpisodes } =
    useContext(EpisodeContext);

  return (
    <div className={styles.episodesSection}>
      <EpisodeSection episodes={aliveEpisodes} status="Alive" />
      <EpisodeSection episodes={sharedEpisodes} />
      <EpisodeSection episodes={deadEpisodes} status="Dead" />
    </div>
  );
};
