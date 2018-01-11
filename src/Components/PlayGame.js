import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class PlayGame extends Component {
  render () {
    return (
      <div>
        <h1>Ar Ya Ready Kids?</h1>
        <Link to="/login"><button type="button" className="btn btn-primary">I'm Ready Captain!</button></Link>
        <h2>HISTORY</h2>
        <div className="container">
          <ol>
            <li>Kesatu</li>
            <li>Kedua</li>
          </ol>
        </div>
      </div>
    )
  }
}