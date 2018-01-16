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
    }, function(error) {
      alert('error')
    });    
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <header>
          <a href="#" id="logo"></a>
          <nav>
            <Link to='/'><button className="v-button logout-button" type="submit" onClick={() => this.logOut()}>Logout</button></Link>
          </nav>
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}