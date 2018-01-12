import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class JoinRoom extends Component {
  handleButton (e) {
    console.log(e);
  }

  render () {
    let looptest = [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1]
    return (
      <div className='col-md-8 offset-md-2'>
        <h1>Select Room</h1>
        <div className="list-room" data-toggle="buttons">
          { 
            looptest.map(tes => {
              return <button type="button" className="join-list-btn v-button" onClick={(event)=> this.handleButton(event)}>Button</button>
            })
          }
        </div>
        <Link to="/play"><button className='back-button'></button></Link>
      </div>
    )
  }
}