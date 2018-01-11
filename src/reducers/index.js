const history = {
  players: []
}

const historyReducer = (state = history, actions) => {
  switch (actions.type) {
    case 'GET_ALL_HISTORY':
      state.players.concat(actions.payload)
      return state
    default:
      return state
  }
}

export default historyReducer