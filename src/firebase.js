import firebase, { initializeApp } from 'firebase'

let config = {
  apiKey: "AIzaSyBaw2zGSNqJUQhcpgRnkWX-H16Yw3oKK0k",
  authDomain: "vrtictactoe.firebaseapp.com",
  databaseURL: "https://vrtictactoe.firebaseio.com",
  projectId: "vrtictactoe",
  storageBucket: "vrtictactoe.appspot.com",
  messagingSenderId: "1072111224312"
};

let app

if(!firebase.apps.length) {
  app = firebase.initializeApp(config)
}
    
export const db = app.database();