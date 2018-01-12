import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div className='col-md-6 offset-md-3 login-page'>
          <img className='logo' src='./assets/img/virtoe-logo.png' alt='logo'/>
          <div className='login-area'>
            <p style={{"font-family": "CuprumBold", fontSize: '30px'}}>LET'S PLAY THE GAME</p>
            <div>
              <button onClick={() => this.props.history.push("/login")} type="submit" className='v-button play-button'>PLAY NOW</button><br />
              <button type="submit" className='v-button history-button'>HISTORY</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}