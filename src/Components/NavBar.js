import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Footer from './Footer'

export default class NavBar extends Component {
  constructor (props) {
    super (props)
    this.state ={
      statusLogin: true
    }
  }

  logoutHandle (e) {
    e.preventDefault()
    this.setState({statusLogin: false})
    console.log(this.state.statusLogin);
  }

  render () {
    const statusLogin = this.state.statusLogin
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
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {statusLogin && <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={this.logoutHandle.bind(this)}>Logout</button>}   
            </form>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}