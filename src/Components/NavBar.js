import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Footer from './Footer'
import firebase from 'firebase'

export default class NavBar extends Component {
  logoutHandle() {
    console.log('logout');
  }

  logOut() {
    const self=this
    localStorage.clear()
    firebase.auth().signOut().then(function() {
      alert('success logout')
      // self.setState({
        //   user: {
      //       uid: '',
      //       name: '',
      //       email: '',
      //       photoURL: '',
      //       totalPlay: '',
      //       win: '',
      //       lose: '',
      //       draw: ''
      //   }         
      // })
    }, function(error) {
      alert('error')
    });    
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarColor01" aria-controls="navbarColor01" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="form-inline nav-item active">
                <img src='../assets/img/single-logo.png' alt='single-logo'/>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <Link to='/'><button className="v-button logout-button" type="submit" onClick={() => this.logOut()}>Logout</button></Link>
            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}