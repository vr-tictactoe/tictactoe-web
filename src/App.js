import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import PlayGame from './Components/PlayGame'
import LoginForm from './Components/LoginForm'
import CreateRoom from './Components/CreateRoom'
import JoinRoom from './Components/JoinRoom';
import SelectAvatar from './Components/SelectAvatar';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path ="/" component={LoginForm} />
          <Route path ="/avatar" render={() => <NavBar><SelectAvatar/></NavBar>} />
          <Route exact path ="/play" render={() => <NavBar><PlayGame/></NavBar>} />
          <Route path ="/play/create" render={() => <NavBar><CreateRoom/></NavBar>} />
          <Route path ="/play/join" render={() => <NavBar><JoinRoom/></NavBar>} />
          <Footer/> 
        </div>
      </Router>
    );
  }
}

export default App;
