import React, { Component } from 'react';
import { db } from '../firebase.js'
import firebase from 'firebase'
import firebaseui from 'firebaseui';

class LoginComponent extends Component {
  constructor(props) {
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
    const uiConfig = {
      signInSuccessUrl: 'http://localhost:3000/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }  

  checkLogin() {
    const self= this
    firebase.auth().onAuthStateChanged(function(user){
      if(user){    
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
  logOut() {
    const self=this
    firebase.auth().signOut().then(function() {
      alert('success logout')
      self.setState({
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
      })
    }, function(error) {
      alert('error')
    });    
  }

  componentWillMount() {
    this.loadFirebaseAuth()
    this.checkLogin()
  }

  render() {
    return (
      <div>
      <div id="firebaseui-auth-container"> </div>
      <button onClick={() => this.logOut()}> LogOut </button>
      <h1> {this.state.user.name} </h1>
      </div>
    );
  }
}

export default LoginComponent
