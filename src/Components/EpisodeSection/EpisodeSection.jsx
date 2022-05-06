import React, { useEffect, useState } from "react";
import { useRequest } from "hooks/useRequest";
import { getEpisodes } from "services/generalService";
import { Spinner } from "Components/Spinner/Spinner";
import styles from "./EpisodeSection.module.scss";

export const EpisodeSection = ({ episodes, status }) => {
  const [episodesList, setEpisodesList] = useState([]);
  const { sendRequest, loading } = useRequest(getEpisodes, (data) => {
    setEpisodesList(data);
  });

  useEffect(() => {
    if (episodes.length) {
      return sendRequest({ episodes });
    } else {
      setEpisodesList([]);
    }
  }, [sendRequest, episodes]);

  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      <h1 className={styles.header}>{`${
        status ? status + " character - Episodes" : "Shared Episodes"
      } `}</h1>
      <div className={styles.section}>
        <div className={styles.list}>
          {episodesList.map((ep) => (
            <p>{ep.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
