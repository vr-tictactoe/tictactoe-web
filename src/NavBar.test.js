import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar';
import JoinRoom from './Components/JoinRoom';
import {Route} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import App from './App';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Testing the NavBar', () => {
  test('It should render the button', () => {
    const Link = shallow(
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarColor01" aria-controls="navbarColor01"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span></button>
    )
    expect(Link).toMatchSnapshot()
  })
  test('It should render the form', () => {
    const Link = shallow(
      <form className="form-inline my-2 my-lg-0">
        {<button className="btn btn-danger my-2 my-sm-0" type="submit" >Logout</button>}
      </form>
    )
    expect(Link).toMatchSnapshot()
  })
  test('Should render nav', () => {
    const wrapper = shallow(<div />)
    const nav = wrapper.find('nav')
    expect(nav).toBeDefined()
  })
  test('It Should have Login Form', () => {
    const app = shallow(<App />)
    const loginForm = app.find(<Route exact path="/" component={LoginForm} />)
    expect(loginForm).toMatchSnapshot()
  })
  test('App should have PlayGame', () => {
    const app = shallow(<App />)
    const playGame = app.find(<Route exact path="/play" render={() => <NavBar><PlayGame /></NavBar>} />)
    expect(playGame).toMatchSnapshot()
  })
})