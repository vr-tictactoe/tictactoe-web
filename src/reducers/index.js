import {combineReducers} from 'redux';

const history = {
  players: null
}

const historyReducer = (state = history, actions) => {
  switch (actions.type) {
    case 'GET_ALL_HISTORY':
      console.log('=======================masuk sini gak?');
      return {...state, players: actions.payload}
    default:
      return state
  }
}

const story = combineReducers({
  historyReducer
})

export default story