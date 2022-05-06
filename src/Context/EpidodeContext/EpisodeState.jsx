import React, { useReducer, useCallback } from "react";
import { EpisodeContext } from "./EpisodeContext";
import { episodeReducer } from "./EpisodeReducer";
import {
  SET_ALIVE_EPISODES,
  SET_DEAD_EPISODES,
  SET_SHARED_EPISODES,
  CLEAR_SHARED_EPISODES,
} from "./actions";

export const EpisodeState = ({ children }) => {
  const initialState = {
    aliveEpisodes: [],
    deadEpisodes: [],
    sharedEpisodes: [],
  };

  const setAliveEpisodes = (episodes) => {
    dispatch({
      type: SET_ALIVE_EPISODES,
      payload: episodes,
    });
  };
  const setDeadEpisodes = (episodes) => {
    dispatch({
      type: SET_DEAD_EPISODES,
      payload: episodes,
    });
  };

  const setSharedEpisodes = useCallback(() => {
    dispatch({
      type: SET_SHARED_EPISODES,
    });
  }, []);

  const clearSharedEpisodes = useCallback(() => {
    dispatch({
      type: CLEAR_SHARED_EPISODES,
    });
  }, []);

  const [state, dispatch] = useReducer(episodeReducer, initialState);
  const { aliveEpisodes, deadEpisodes, sharedEpisodes } = state;

  return (
    <EpisodeContext.Provider
      value={{
        aliveEpisodes,
        deadEpisodes,
        sharedEpisodes,
        setAliveEpisodes,
        setDeadEpisodes,
        setSharedEpisodes,
        clearSharedEpisodes,
      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
};
