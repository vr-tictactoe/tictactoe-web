import axios from 'axios'

const https = axios.create({
  baseURL: 'https://us-central1-vtitu-191706.cloudfunctions.net'
})

export const getHistory = (players) => {
    return {
      type: 'GET_ALL_HISTORY',
      payload: players
    }
}

export const getHistoryAPI = () => {
  return (dispatch) => {
    https.get('/getHistory')
    .then(({data}) => {
      console.log(data)
      dispatch(getHistory(data))
    })
    .catch(err => {
      console.log('====================================');
      console.log('error getting');
      console.log('====================================');
    })
  }
}