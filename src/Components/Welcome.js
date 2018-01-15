import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase.js'
import firebase from 'firebase'

export default class Welcome extends Component {

  checkIsLogin() {
    db.ref('users').orderByChild('uid').equalTo(localStorage.getItem('uid')).once('value', snaphotUser => {
      console.log(snaphotUser.val())
      if(snaphotUser.val() !== null){
        this.props.history.push('/play')
      }else{
        this.props.history.push("/login")
      }
    }) 
  }

  render() {
    return (
      <div>
        <div className='col-md-6 offset-md-3 login-page'>
          <img className='logo' src='./assets/img/virtoe-logo.png' alt='logo'/>
          <div className='login-area'>
            <p style={{"font-family": "CuprumBold", fontSize: '30px'}}>LET'S PLAY THE GAME</p>
            <div>
              <button onClick={() => this.checkIsLogin()} type="submit" className='v-button play-button'>PLAY NOW</button><br />
              <button onClick={() => this.props.history.push('/history')} type="submit" className='v-button history-button'>HISTORY</button>
              <button onClick={() => this.props.history.push('/leaderboard')} type="submit" className='v-button history-button'>LEADERBOARD</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}