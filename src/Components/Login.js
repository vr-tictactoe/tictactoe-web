import React, { Component } from 'react';
import { db } from '../firebase.js'
import firebase from 'firebase'
import firebaseui from 'firebaseui';


const uiConfig = {
  signInSuccessUrl: 'http://localhost:3000/avatar',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default class LoginButton extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        uid: '',
        name: '',
        email: '',
        photoURL: '',
        totalPlay: '',
        win: '',
        lose: '',
        draw: ''
      }
    }
  }

  loadFirebaseAuth(){
    ui.start('#firebaseui-auth-container', uiConfig);
  }      
  
  componentDidUpdate() {
    console.log('masuk')
  }

  componentDidMount() {
    this.loadFirebaseAuth()
  }

  render() {
    return (
      <div className='col-md-4 offset-md-4 wrap-content'>
        <img className='logo' src='./assets/img/virtoe-logo.png' alt='logo'/>
        <h1>Login Before Play</h1>
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}