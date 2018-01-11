import { initializeApp } from 'firebase'


const app = initializeApp({
  apiKey: "AIzaSyBaw2zGSNqJUQhcpgRnkWX-H16Yw3oKK0k",
  authDomain: "vrtictactoe.firebaseapp.com",
  databaseURL: "https://vrtictactoe.firebaseio.com",
  projectId: "vrtictactoe",
  storageBucket: "vrtictactoe.appspot.com",
  messagingSenderId: "1072111224312"
});
	
export const db = app.database();