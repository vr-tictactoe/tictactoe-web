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
import PlayGame from './Components/PlayGame';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path ="/" component={LoginForm} />
          {/* <Route exact path ="/" component={PlayGame} /> */}
          <Route path ="/avatar" render={() => <NavBar><SelectAvatar/></NavBar>} />
          <Route path ="/newgame" render={() => <NavBar><NewGame/></NavBar>} />
          <Route path ="/newgame/create-room" render={() => <NavBar><CreateRoom/></NavBar>} />
          <Route path ="/newgame/join-room" render={() => <NavBar><JoinRoom/></NavBar>} />
        </div>
      </Router>
    );
  }
}

export default App;
