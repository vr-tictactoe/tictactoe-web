import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class SelectAvatar extends Component {
  constructor() {
    super()
    this.state = {
      avatar: 'AVATAR',
      classAvatar1: 'avatar avatar-select',
      classAvatar2: 'avatar avatar-select'
    }
  }

  handleAvatar1() {
    this.setState({
      avatar: 'astro',
      classAvatar1: 'avatar',
      classAvatar2: 'avatar avatar-select'
    })
    console.log(this.state)
  }

  handleAvatar2() {
    this.setState({
      avatar: 'alien',
      classAvatar1: 'avatar avatar-select',
      classAvatar2: 'avatar'
    })
    console.log(this.state)
  }

  render() {
    let avatar = this.state.avatar
    return (
      <div className='col-md-6 offset-md-3'>
        <h1>Select Your Avatar</h1>
        <div className='list-avatar'>
          <img onClick={() => this.handleAvatar1()} className={this.state.classAvatar1} src='../assets/img/astro.png' alt='astro' />
          <img onClick={() => this.handleAvatar2()} className={this.state.classAvatar2} src='../assets/img/alien.png' alt='alien' />
          <br />
          <span className='avatar-name'>{avatar.toUpperCase()}</span>
        </div>
        <Link to="/play"><button type="button" className="v-button avatar-button">SELECT</button></Link>
      </div>
    )
  }
}