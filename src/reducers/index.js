import {combineReducers} from 'redux';

const history = {
  players: null,
  dataPlayers: null
}

const historyReducer = (state = history, actions) => {
  switch (actions.type) {
    case 'GET_ALL_HISTORY':
      return {...state, players: actions.payload}
    case 'GET_DATA_PLAYERS':
      return {...state, dataPlayers: actions.payload}
    default:
      return state
  }
}

const story = combineReducers({
  historyReducer
})

export default story