import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { db } from '../firebase.js'
import { VR_URL } from '../constant'
import Spinner from 'react-spinkit'

export default class JoinRoom extends Component {
  constructor(props) {
    super()
    this.state = {
      uid: localStorage.getItem('uid'),
      player: [],
      gameKey: '',
      gameKeyDummy: '',
      type: '',
      games: [],
      loading: true
    }
  }

  handleButton (e) {
    console.log(e);
  }

  joinRoom(gameRoom) {
    db.ref('games').child(gameRoom).once('value', room => {
      if(room.val().player2.uid === '' && room.val().winner === '' &&
         room.val().player1.uid !== localStorage.getItem('uid') &&
         room.val().player2.uid !== localStorage.getItem('uid')) {
        db.ref('games').child(gameRoom).update({
          player2: {
            name: this.state.player.name,
            uid: this.state.player.uid,
            type: 'O',
            avatar: this.state.player.avatar,
            status: 'Not Ready'
          }
        })

        window.location.href = `${VR_URL}/?room=${gameRoom}&player=${this.state.uid}`;
      }else if(room.val().winner !== ''){
        alert('game already finished')
      }else if(room.val().player2.uid !== '' && room.val().winner === ''
               && room.val().player1.uid !== localStorage.getItem('uid')
               && room.val().player2.uid !== localStorage.getItem('uid')){
        alert('game already Full')
      }else if(room.val().player1.uid === localStorage.getItem('uid') || room.val().player2.uid === localStorage.getItem('uid')){
        alert('Welcome Back')
        window.location.href = `${VR_URL}/?room=${gameRoom}&player=${this.state.uid}`;
      }
    })
  }

  componentDidMount() {
    db.ref('users').orderByChild('uid').equalTo(this.state.uid).once('value', snaphotUser => {
      snaphotUser.forEach(snapUser => {
        this.state.player = snapUser.val()
      })
    })

    db.ref('games').on('value', snapshot => {
      let allGames = []
      for(let game in snapshot.val()){
        if(snapshot.val()[game].winner === '' && snapshot.val()[game].gameStatus === ''){
          let objGame= {
            gameName: snapshot.val()[game].roomName,
            gameId: game,
            roomStatus: 'join-list-btn waiting-button'
          }
          allGames.unshift(objGame)
        }else if(snapshot.val()[game].winner === '' && snapshot.val()[game].gameStatus === 'Ready'){
           let objGame= {
            gameName: snapshot.val()[game].roomName,
            gameId: game,
            roomStatus: 'join-list-btn active-button'

          }
          allGames.push(objGame)
        }
      }
      this.setState({
        games: allGames,
        loading: false
      })
    })
  }

  render () {
    return (
      <div className='col-md-8 offset-md-2 have-list'>
        {
          this.state.loading ? <div className='loading'><Spinner name="ball-pulse-sync" color="#fff"/></div>
          :
          <div>
            <h1>Select Room</h1>
            <div className="list-room" data-toggle="buttons">
              {
                this.state.games.map(game => {
                  return <button type="button" className="join-list-btn v-button" onClick={()=> this.joinRoom(game.gameId)}>{game.gameName}</button>
                })
              }
            </div>
            <Link to="/play"><button className='back-button'></button></Link>
          </div>
        }
      </div>
    )
  }
}