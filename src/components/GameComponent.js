import React, { Component } from 'react';
import { db } from '../firebase.js'

class GameComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      board: ['','','','','','','','',''],
      gameState: 'X',
      uid: 'PCSnZSjSdNNlsfpURGwQkZnsysK2',
      player: [],
      gameKey: '',
    }
  }

  resetBoard(status) {

    this.setState({
      board: ['','','','','','','','',''],
    })
  }

  clickBoard(index) {
    if(this.state.board[index] === '' || this.state.board[index] === null ){     
      if(this.state.gameState === 'X'){
        this.state.board.splice(index,1,this.state.gameState)
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
          this.resetBoard('X Winner')
        }
        if(this.state.board.indexOf('') === -1 && 
           checkBoard[0].indexOf('XXX') === -1 && 
           checkBoard[0].indexOf('OOO') === -1){
          alert('DRAW')
          this.resetBoard('DRAW')
        }                              
        this.setState({
          board: this.state.board,
          gameState: 'O'
        })
      }else{
       this.state.board.splice(index,1,this.state.gameState)
        let checkBoard = [`${this.state.board[0]+this.state.board[1]+this.state.board[2]},
                     ${this.state.board[0]+this.state.board[3]+this.state.board[6]},
                     ${this.state.board[0]+this.state.board[4]+this.state.board[8]},
                     ${this.state.board[2]+this.state.board[4]+this.state.board[6]},
                     ${this.state.board[2]+this.state.board[5]+this.state.board[8]},
                     ${this.state.board[3]+this.state.board[4]+this.state.board[5]},
                     ${this.state.board[6]+this.state.board[7]+this.state.board[8]},
                     ${this.state.board[1]+this.state.board[4]+this.state.board[7]}`]
        if(checkBoard[0].indexOf('OOO') !== -1 ){
          alert('O Winner')
          this.resetBoard('O Winner')
        } 

        if(this.state.board.indexOf('') === -1 && 
           checkBoard[0].indexOf('XXX') === -1 && 
           checkBoard[0].indexOf('OOO') === -1){
          alert('DRAW')
        }        
       this.setState({
        board: this.state.board,
        gameState: 'X'
      })     
     }
    }
 }

  componentWillMount() {
      db.ref('users').orderByChild('uid').equalTo(this.state.uid).on('value', snaphotUser => {
        snaphotUser.forEach(snapUser => {
            this.state.player = snapUser.val()
        })
        console.log(this.state.player)
        const newGame = {
          board: this.state.board,
          playerInGame: [this.state.player.name],
          player1: {
            name: this.state.player.name,
            type: 'X'
          },
          winner: ''
        }
        let Key = db.ref('games').push(newGame).key
        this.setState({
          gameKey: Key
        })
      }) 
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
