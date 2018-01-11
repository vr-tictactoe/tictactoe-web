import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class PlayGame extends Component {
  render () {
    return (
      <div className='col-md-4 offset-md-4 wrap-content'>
        <h1>Welcome To The Game</h1>
        <div className='button-area'>
          <Link to="/play/create"><button type="button" className="v-button new-button">NEW GAME</button></Link><br />
          <Link to="/play/join"><button type="button" className="v-button join-button">JOIN ROOM</button></Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}