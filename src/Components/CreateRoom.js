import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { db } from '../firebase.js'
import { VR_URL } from '../constant.js'

export default class CreateRoom extends Component {
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
      nameRoom: '',
    }
  }

  handleInput(event) {
    this.setState({
      nameRoom : event.target.value
    })
  }

  async createRoom () {
    const newGame = {
      board: ['','','','','','','','',''],
      roomName: this.state.nameRoom,
      player1: {
        name: this.state.player.name,
        uid: this.state.player.uid,
        type: 'X',
        avatar: this.state.player.avatar,
        status: 'Not Ready'
      },
      player2: {
        name: '',
        uid: '',
        type: '',
        avatar: '',
        status: 'Not Ready'
      },
      winner: '',
      turn: this.state.player.uid,
      gameStatus: ''
    }

    let Key = await db.ref('games').push(newGame).key
    this.setState({
      gameKeyDummy: Key,
      nameRoom: '',
    })

    window.location.href = `${VR_URL}/?room=${Key}&player=${this.state.uid}`;
    // this.props.history.push(`/game/${Key}`)
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

  render () {
    return (
      <div className='col-md-4 offset-md-4 wrap-content'>
        <div>
          <h1>Create Room</h1>
          <div className="form-group">
            <input onChange={(v) => this.handleInput(v)} type="text" className="v-form" placeholder="Enter Room Name" />
          </div>
          <button onClick={() => this.createRoom()} type="submit" className="v-button room-button">CREATE</button>
        </div>
        <br/>
        <Link to="/play"><button onClick={() => this.setState({play: false})} className='back-button'></button></Link>
      </div>
    )
  }
}