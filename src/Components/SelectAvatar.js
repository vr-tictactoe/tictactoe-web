import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class SelectAvatar extends Component {
  render() {
    return (
      <div>
        <h1>Select Your Avatar</h1>
        <div>
        </div>
        <Link to="/newgame"><button type="button" className="btn btn-danger">Find Your Room</button></Link>
      </div>
    )
  }
}