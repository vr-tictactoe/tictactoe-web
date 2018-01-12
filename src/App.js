import React, { Component } from 'react';
import GameComponent from './components/GameComponent'
import RoomComponent from './components/RoomComponent'
import { BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (     
      <Router>
      	<div className="App">
      	<Route exact path='/' component={RoomComponent} />
      	<Route exact path='/game/:gameId' render={(props) => <GameComponent {...props} /> }  />
      	</div>
      </Router>
    );
  }
}

export default App;
