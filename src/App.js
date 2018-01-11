import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import NewGame from './Components/NewGame'
import LoginForm from './Components/LoginForm'
import CreateRoom from './Components/CreateRoom'
import JoinRoom from './Components/JoinRoom';
import SelectAvatar from './Components/SelectAvatar';
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Route exact path ="/" component={NewGame} />
          <Route path ="/login" component={LoginForm} />
          <Route path ="/avatar" component={SelectAvatar} />
          <Route path ="/newgame/create-room" component={CreateRoom} />
          <Route path ="/newgame/join-room" component={JoinRoom} />
        </div>
      </Router>
    );
  }
}

export default App;
