import React, { Component } from 'react';

export default class JoinRoom extends Component {
  handleButton (e) {
    console.log(e);
  }

  render () {
    let looptest = [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1]
    return (
      <div className='col-md-8 offset-md-2'>
        <h1>Join Room</h1>
        <div className="list-room" data-toggle="buttons">
          { 
            looptest.map(tes => {
              return <button type="button" className="join-list-btn v-button" onClick={(event)=> this.handleButton(event)}>Button</button>
            })
          }
        </div>
      </div>
    )
  }
}