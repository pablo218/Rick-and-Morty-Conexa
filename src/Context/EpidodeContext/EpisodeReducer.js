import { SET_ALIVE_EPISODES, SET_DEAD_EPISODES, SET_SHARED_EPISODES, CLEAR_SHARED_EPISODES } from './actions';

export const episodeReducer = (state, action)=>{

    switch(action.type) {
        case SET_ALIVE_EPISODES:
            const aliveEpisodes = action.payload.map(ep=> ep.slice(40))
            return {...state, aliveEpisodes: aliveEpisodes};
        case SET_DEAD_EPISODES:
            const deadEpisodes = action.payload.map(ep=> ep.slice(40))
            return {...state, deadEpisodes: deadEpisodes};
        case SET_SHARED_EPISODES:
            const shared = state.deadEpisodes.filter((ep)=> state.aliveEpisodes.includes(ep))
            return {...state, sharedEpisodes: shared};
        case CLEAR_SHARED_EPISODES:
            return {...state, sharedEpisodes: []}
        default:
            return {...state}
    }
}