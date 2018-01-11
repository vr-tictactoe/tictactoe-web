export const getHistory = (players) => {
    return {
      type: 'GET_ALL_HISTORY',
      payload: players
    }
}