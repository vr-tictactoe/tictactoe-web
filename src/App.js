import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Provider} from 'react-redux';

import './App.css';

import NewGame from './Components/NewGame'
import LoginForm from './Components/LoginForm'
import CreateRoom from './Components/CreateRoom'
import JoinRoom from './Components/JoinRoom';
import SelectAvatar from './Components/SelectAvatar';
import NavBar from './Components/NavBar';
import PlayGame from './Components/PlayGame';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="App">
          <NavBar />
            <Route exact path ="/" component={PlayGame} />
            <Route path ="/login" component={LoginForm} />
            <Route path ="/avatar" component={SelectAvatar} />
            <Route path ="/newgame" component={NewGame} />
            <Route path ="/newgame/create-room" component={CreateRoom} />
            <Route path ="/newgame/join-room" component={JoinRoom} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
