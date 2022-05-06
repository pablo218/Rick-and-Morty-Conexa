import React, { useEffect, useState, useContext } from "react";
import { useRequest } from "hooks/useRequest";
import { EpisodeContext } from "Context/EpidodeContext/EpisodeContext";
import { getCharacters } from "services/generalService";
import { CharacterCard } from "Components/CharacterCard/CharacterCard";
import { Spinner } from "Components/Spinner/Spinner";
import chevron from "assets/chevron-active.svg";
import incactiveChevron from "assets/chevron-default.svg";
import styles from "./CharacterSection.module.scss";

export const CharacterSection = ({ status, selected, setSelected }) => {
  const { setAliveEpisodes, setDeadEpisodes } = useContext(EpisodeContext);

  const [characters, setCharacters] = useState([]);
  const [reqInfo, setReqInfo] = useState({ prev: null, next: null });

  const { sendRequest, loading } = useRequest(getCharacters, (data) => {
    setCharacters(data.results);
    setReqInfo(data.info);
  });

  useEffect(() => {
    sendRequest({ page: 1, status });
  }, [status, sendRequest]);

  const selectCharacter = (ch) => {
    if (selected === ch.id) {
      setSelected(null);
      status === "Alive" && setAliveEpisodes([]);
      status === "Dead" && setDeadEpisodes([]);
    } else {
      setSelected(ch.id);
      status === "Alive"
        ? setAliveEpisodes(ch.episode)
        : setDeadEpisodes(ch.episode);
    }
  };

  const nextHandler = () => {
    sendRequest({ query: reqInfo.next.slice(42, reqInfo.next.length) });
  };

  const prevHanlder = () => {
    sendRequest({ query: reqInfo.prev.slice(42, reqInfo.prev.length) });
  };

  return (
    <div className={styles.container}>
      {loading && <Spinner className={styles.spinner} />}

      <div className={styles.header}>
        <h1>{status} Characters</h1>
        <div
          className={styles.chevronContainer}
          style={
            reqInfo.prev ? { cursor: "pointer" } : { cursor: "not-allowed" }
          }
          onClick={prevHanlder}
        >
          <img
            className={styles.leftChevron}
            src={reqInfo.prev ? chevron : incactiveChevron}
            alt="chevron"
          />
        </div>
        <div
          className={styles.chevronContainer}
          style={
            reqInfo.next ? { cursor: "pointer" } : { cursor: "not-allowed" }
          }
          onClick={nextHandler}
        >
          <img src={reqInfo.next ? chevron : incactiveChevron} alt="chevron" />
        </div>
      </div>
      <div className={styles.characterSection}>
        {characters.map((ch) => (
          <CharacterCard
            character={ch}
            onClick={() => selectCharacter(ch)}
            isSelected={ch.id === selected}
          />
        ))}
      </div>
    </div>
  );
};
