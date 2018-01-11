import React, { Component } from 'react';

export default class JoinRoom extends Component {
  handleButton (e) {
    console.log(e.target.id);
  }

  render () {
    return (
      <div>
        <h1>Join Room</h1>
        <div className="btn-group-vertical" data-toggle="buttons">
          <button type="button" className="btn btn-primary" aria-pressed="true" id="1" onClick={(event)=> this.handleButton(event)}>Button</button>
          <button type="button" className="btn btn-primary" aria-pressed="true" id="2" onClick={(event) => this.handleButton(event)}>Button</button>
          <button type="button" className="btn btn-primary" aria-pressed="true" id="3" onClick={(event) => this.handleButton(event)}>Button</button>
          <button type="button" className="btn btn-primary" aria-pressed="true" id="4" onClick={(event) => this.handleButton(event)}>Button</button>
          <button type="button" className="btn btn-primary" aria-pressed="true" id="5" onClick={(event) => this.handleButton(event)}>Button</button>
          <button type="button" className="btn btn-primary" aria-pressed="true" id="6" onClick={(event) => this.handleButton(event)}>Button</button>
        </div>
      </div>
    )
  }
}