import React, { Component } from 'react';
import { db } from '../firebase.js'

class GameComponent extends Component {
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

  fillBoard(index) {
    if(this.state.board[index] === '' || this.state.board[index] === null ){
      db.ref('games').child(this.props.match.params.gameId).once('value', snapshotGame => {
        if(snapshotGame.val().player1.uid === this.state.uid){
          this.state.board.splice(index,1,snapshotGame.val().player1.type)
          db.ref('games').child(this.props.match.params.gameId).update({
            board: this.state.board,
            turn: snapshotGame.val().player2.uid
          })
        }
        if(snapshotGame.val().player2.uid === this.state.uid){
          this.state.board.splice(index,1,snapshotGame.val().player2.type)
          db.ref('games').child(this.props.match.params.gameId).update({
            board: this.state.board,
            turn: snapshotGame.val().player1.uid
          })
        }

        let checkBoard = [`${this.state.board[0]+this.state.board[1]+this.state.board[2]},
        ${this.state.board[0]+this.state.board[3]+this.state.board[6]},
        ${this.state.board[0]+this.state.board[4]+this.state.board[8]},
        ${this.state.board[2]+this.state.board[4]+this.state.board[6]},
        ${this.state.board[2]+this.state.board[5]+this.state.board[8]},
        ${this.state.board[3]+this.state.board[4]+this.state.board[5]},
        ${this.state.board[6]+this.state.board[7]+this.state.board[8]},
        ${this.state.board[1]+this.state.board[4]+this.state.board[7]}`]

        if(checkBoard[0].indexOf('XXX') !== -1 ){
          alert('X Winner')
          db.ref('games').child(this.props.match.params.gameId).update({
            winner: snapshotGame.val().player1.name
          })
          this.setState({
            board: ['','','','','','','','','']
          })
        }

        if(checkBoard[0].indexOf('OOO') !== -1 ){
          alert('O Winner')
          db.ref('games').child(this.props.match.params.gameId).update({
            winner: snapshotGame.val().player2.name
          })
          this.setState({
            board: ['','','','','','','','','']
          })
        }

        if(this.state.board.indexOf('') === -1 &&
         checkBoard[0].indexOf('XXX') === -1 &&
         checkBoard[0].indexOf('OOO') === -1){
          alert('DRAW')
          this.setState({
            board: ['','','','','','','','','']
          })
         }

    })
    }
  }

  clickBoard(index) {
    db.ref('games').child(this.props.match.params.gameId).child('turn').once('value', checkTurn => {
      console.log(checkTurn.val())

     if(checkTurn.val() === this.state.uid){
        this.fillBoard(index)
      }
    })
  }

componentWillMount() {
  db.ref('users').orderByChild('uid').equalTo(this.state.uid).once('value', snaphotUser => {
    snaphotUser.forEach(snapUser => {
      this.state.player = snapUser.val()
    })
  })

  if(this.props.match.params.gameId !== ''){
    db.ref('games').child(this.props.match.params.gameId).on('value', snapshot => {
      if(snapshot.val() !== null ){
        snapshot= snapshot.val()
          this.setState({
            board: snapshot.board
          })
      }
    })
  }
}


  render() {
    return (
      <div>
       <div className="board">
          <div className="row kot">
            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(0)}> <h1> {this.state.board[0]} </h1> </button> </div>

            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(1)}> <h1> {this.state.board[1]} </h1> </button> </div>

            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(2)}> <h1> {this.state.board[2]} </h1> </button> </div>
          </div>
          <div className="row kot">
            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(3)}> <h1> {this.state.board[3]} </h1> </button> </div>

            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(4)}> <h1> {this.state.board[4]} </h1> </button> </div>

            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(5)}> <h1> {this.state.board[5]} </h1> </button> </div>
          </div>
          <div className="row kot">
            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(6)}> <h1> {this.state.board[6]} </h1> </button> </div>

            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(7)}> <h1> {this.state.board[7]} </h1> </button> </div>

            <div className="kotak col-md-4" > <button onClick={() => this.clickBoard(8)}> <h1> {this.state.board[8]} </h1> </button> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameComponent
