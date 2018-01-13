import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      play: false
    }
  }

  render() {
    return (
      <div>
        <div className='col-md-6 offset-md-3 login-page'>
          <img className='logo' src='./assets/img/virtoe-logo.png' alt='logo'/>
          <div className='login-area'>
            <p style={{fontFamily: "CuprumBold", fontSize: '30px'}}>LET'S PLAY THE GAME</p>
            { 
              this.state.play ? 
              <div>
                <button type="submit" className='v-button fb-button'>FACEBOOK LOGIN</button>
                <p>Login with Facebook before Playing.</p>
                <button onClick={() => this.setState({play: false})} className='back-button'></button>
              </div>
              :
              <div>
                <button onClick={() => this.setState({play: true})} type="submit" className='v-button play-button'>PLAY NOW</button><br />
                <button type="submit" className='v-button history-button'>HISTORY</button>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}