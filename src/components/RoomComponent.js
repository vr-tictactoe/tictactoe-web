import React, { Component } from 'react';
import { db } from '../firebase.js'
import { Link } from 'react-router-dom'

class RoomComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      board: ['','','','','','','','',''],
      uid: localStorage.getItem('uid'),
      player: [],
      gameKey: '',
      gameKeyDummy: '',
      type: '',
      games: [],
    }
  }

  async createRoom () {
    const newGame = {
      board: ['','','','','','','','',''],
      roomName: '',
      player1: {
        name: this.state.player.name,
        uid: this.state.player.uid,
        type: 'X'
      },
      player2: {
        name: '',
        uid: '',
        type: ''
      },
      winner: '',
      turn: this.state.player.uid,
    }
    
    let Key = await db.ref('games').push(newGame).key
    this.setState({
      gameKeyDummy: Key
    })
    this.props.history.push(`/game/${Key}`)
  }

  joinRoom(gameRoom) {
    db.ref('games').child(gameRoom).once('value', room => {
      if(room.val().player2.uid === '' && room.val().winner === '') {
        db.ref('games').child(gameRoom).update({
          player2: {
            name: this.state.player.name,
            uid: this.state.player.uid,
            type: 'O',
          }
        })
        this.props.history.push(`/game/${gameRoom}`)
      }else if(room.val().winner !== ''){
        alert('game already finished')
      }else if(room.val().player2.uid !== '' && room.val().winner === ''){
        alert('game already Full')      
      }
    })
  }

  componentWillMount() {
    db.ref('users').orderByChild('uid').equalTo(this.state.uid).once('value', snaphotUser => {
      snaphotUser.forEach(snapUser => {
        this.state.player = snapUser.val()
      })
    }) 

    db.ref('games').on('value', snapshot => {
      let allGames = []
      for(let game in snapshot.val()){
        allGames.push(game)
      }
      this.setState({
        games: allGames
      })
    })
  }


  render() {
    return (
      <div>
      <button onClick={() => this.createRoom()}> Create Room </button>
      {this.state.games.map((game,i) => {  
        return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          <button key={i} onClick={() => this.joinRoom(game)}> Join Room {i}</button>
          )
      })}
      </div>
      )
  }
}

export default RoomComponent
