import React, { Component } from 'react';

export default class CreateRoom extends Component {
  render () {
    return (
      <div>
        <h1>Create Room</h1>
        <form>
          <div className="form-group">
            <label>Name of Room</label>
            <br />
            <input type="text" className="form" aria-describedby="emailHelp" placeholder="enter room name" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}