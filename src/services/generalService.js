import { api } from 'config/api';

export const getCharacters = ({page, status, query}) => {
    const parameters = query? query : `?page=${page}&status=${status}`
    return api.get(`/character/${parameters}`)
};



export const getEpisodes = ({episodes}) => api.get(`/episode/[${episodes}]`)
