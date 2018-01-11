import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login First</h1>
        <form>
          <button type="button" className="btn btn-primary">Login With Facebook</button>
          <button type="button" className="btn btn-info">Login With Google</button>
        </form>
        <Link to="/avatar">Select Avatar</Link>
      </div>
    )
  }
}