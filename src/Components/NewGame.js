import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class NewGame extends Component {
  render () {
    return (
      <div>
        <h1>Be Ready To Play</h1>
        <Link to="/newgame/create-room"><button type="button" className="btn btn-info">Create Room</button></Link>
        <Link to="/newgame/join-room"><button type="button" className="btn btn-info">Join Room</button></Link>
      </div>
    )
  }
}