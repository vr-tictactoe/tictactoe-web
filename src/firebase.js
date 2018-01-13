import firebase, { initializeApp } from 'firebase'

let config = {
  apiKey: "AIzaSyDWoKjb1rijTl9IVG6E0bqPUC7VE9qILzg",
  authDomain: "backup-vr-tictactoe.firebaseapp.com",
  databaseURL: "https://backup-vr-tictactoe.firebaseio.com",
  projectId: "backup-vr-tictactoe",
  storageBucket: "",
  messagingSenderId: "547823507364"
};

let app

if(!firebase.apps.length) {
  app = firebase.initializeApp(config)
}

export const db = app.database();