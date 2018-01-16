import axios from 'axios'
import { db } from '../firebase'

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

export const dataPlayer = (data) => {
  return {
    type: "GET_DATA_PLAYERS",
    payload: data
  }
}

export const getDataPlayer = () => {
  const listPlayers = []
  return (dispatch) => {
    db.ref('/users').once('value')
    .then((snap) => {
      snap.forEach(data => {
        if (data.val().totalPlay !== 0) {
          let obj = {
            id: data.key,
            name: data.val().name,
            score: ((data.val().win * 10 + data.val().draw * 5) / data.val().totalPlay)
          }
          listPlayers.push(obj)
        }
      })
      console.log(listPlayers);
      dispatch(dataPlayer(listPlayers))
    })
    .catch(err => { 
      console.error(err)
    })
  }
}