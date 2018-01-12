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

  checkLogin() {
    const self= this
    firebase.auth().onAuthStateChanged(function(user){
      if(user){    
        localStorage.setItem('uid', user.uid)
        db.ref('users').orderByChild('uid').equalTo(user.uid).on('value',function(snapshot){
          if(snapshot.val() === null){
              const userData = {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                totalPlay: 0,
                win: 0,
                lose: 0,
                draw: 0,
              }
              db.ref('users').push(userData)
                          
              self.setState({
                user: userData
               })

          }
            snapshot.forEach(snap => {
              let objUser = snapshot.val()[snap.key]
              self.setState({
                user: {
                  uid: objUser.uid,
                  name: objUser.name,
                  email: objUser.email,
                  photoURL: objUser.photoURL,
                  totalPlay: objUser.totalPlay,
                  win: objUser.win,
                  lose: objUser.lose,
                  draw: objUser.draw                  
                }
               })              
            })
         })
      }
    })
  }    
  
  componentDidMount() {
    this.loadFirebaseAuth()
    this.checkLogin()
  }

  // componentWillUnmount() {
  //   ui.delete();
  // }

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