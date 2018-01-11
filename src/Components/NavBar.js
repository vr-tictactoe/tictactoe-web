import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class NavBar extends Component {
  constructor (props) {
    super (props)
    this.state ={
      statusLogin: false
    }
  }

  loginHandle () {
    this.setState({statusLogin: !this.state.statusLogin})
    console.log(this.state.statusLogin);
  }

  render () {
    const statusLogin = this.state.statusLogin
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Navbar</Link>
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
            {!statusLogin ? <button className="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
              : <button className="btn btn-secondary my-2 my-sm-0" type="submit">Logout</button>  
          }   
          </form>
        </div>
      </nav>
    )
  }
}