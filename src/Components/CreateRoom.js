import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class CreateRoom extends Component {
  render () {
    return (
      <div className='col-md-4 offset-md-4 wrap-content'>
        <div>
          <h1>Create Room</h1>
          <div className="form-group">
            <input type="text" className="v-form" placeholder="Enter Room Name" />
          </div>
          <button type="submit" className="v-button room-button">CREATE</button>
        </div>
        <br/>
        <Link to="/play"><button onClick={() => this.setState({play: false})} className='back-button'></button></Link>
      </div>
    )
  }
}