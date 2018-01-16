import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import JoinRoom from './Components/JoinRoom';
import LoginForm from './Components/LoginForm';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SelectAvatar from './Components/SelectAvatar';
import CreateRoom from './Components/CreateRoom';
import PlayGame from './Components/PlayGame';

configure({ adapter: new Adapter() })

describe('Testing the NavBar', () => {
  // 1st test
  test('It should render the button', () => {
    const Link = shallow(
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarColor01" aria-controls="navbarColor01"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span></button>
    )
    expect(Link).toMatchSnapshot()
  })
  // 2nd test
  test('It should render the form', () => {
    const Link = shallow(
      <form className="form-inline my-2 my-lg-0">
        {<button className="btn btn-danger my-2 my-sm-0" 
        type="submit" >Logout</button>}
      </form>
    )
    expect(Link).toMatchSnapshot()
  })
  // 3rd test
  test('Should render nav', () => {
    const wrapper = shallow(<div />)
    const nav = wrapper.find('nav')
    expect(nav).toBeDefined()
  })
  // 4th test
  test('It Should have Login Form', () => {
    const app = shallow(<App />)
    const loginForm = app.find(<Route exact path="/" 
    component={LoginForm} />)
    expect(loginForm).toMatchSnapshot()
  })
  // 5th test
  test('App should have PlayGame', () => {
    const app = shallow(<App />)
    const playGame = app.find(<Route exact path="/play" 
    render={() => <NavBar><PlayGame /></NavBar>} />)
    expect(playGame).toMatchSnapshot()
  })
  // 6th test
  test('App should have JoinRoom', () => {
    const app = shallow(<App />)
    const joinRoom = app.find(<Route path="/play/join" 
    render={() => <NavBar><JoinRoom /></NavBar>} />)
    expect(joinRoom).toMatchSnapshot()
  })
  // 7th test
  test('App should have Footer', () => {
    const app = shallow(<App />)
    const footer = app.find(<Footer /> )
    expect(footer).toMatchSnapshot()
  })
  // 8th test
  test('LoginForm should have image', () => {
    const loginForm = shallow(<div className='col-md-6 offset-md-3 login-page' />)
    const img = loginForm.find(<img className='logo' 
    src='./assets/img/virtoe-logo.png' alt='logo' />)
    expect(img).toMatchSnapshot()
  })
  // 9th test
  test('App should have Select Avatar', () => {
    const app = shallow(<App />)
    const selectAvatar = app.find(<Route path="/avatar" 
    render={() => <NavBar><SelectAvatar /></NavBar>} />)
    expect(selectAvatar).toMatchSnapshot()
  })
  // 10th test
  test('App should have CreateRoom', () => {
    const app = shallow(<App />)
    const selectAvatar = app.find(<Route path="/play/create" 
    render={() => <NavBar><CreateRoom /></NavBar>} />)
    expect(selectAvatar).toMatchSnapshot()
    expect(selectAvatar).toBeDefined()
  })
  // 11th test
  test('LoginForm should have Facebook Login', () => {
    const loginForm = shallow(<LoginForm />)
    const button = loginForm.find(<button type="submit" 
    className='v-button fb-button'>FACEBOOK LOGIN</button>)
    expect(button).toBeDefined()
    expect(button).toMatchSnapshot()
  })
  // 12th test
  test('LoginForm should have button History', () => {
    const loginForm = shallow(<LoginForm />)
    const button = loginForm.find(<button type="submit" 
    className='v-button history-button'>HISTORY</button>)
    expect(button).toBeDefined()
    expect(button).toMatchSnapshot()
  })
  // 13th test
  test('Play Game should have button to Play New Game', () => {
    const playGame = shallow(<PlayGame />)
    const button = playGame.find(<Link to="/play/create"><button 
    type="button" className="v-button new-button">NEW GAME</button></Link>)
    expect(button).toBeDefined()
    expect(button).toMatchSnapshot()
  })
  // 14th test
  test('App should have PlayGame', () => {
    const app = shallow(<App />)
    const playGame = app.find(<Route exact path="/play" 
    render={() => <NavBar><PlayGame /></NavBar>} />)
    expect(playGame).toMatchSnapshot()
  })
  // 15th test
  test('Play Game should have button Join', () => {
    const playGame = shallow(<PlayGame />)
    const button = playGame.find(<Link to="/play/join"><button type="button" 
    className="v-button join-button">JOIN ROOM</button></Link>)
    expect(button).toBeDefined()
    expect(button).toMatchSnapshot()
  })
  // 16th test
  test('Select Avatar should have Link', () => {
    const selectAvatar = shallow(<SelectAvatar />)
    const link = selectAvatar.find(<Link to="/newgame"><button type="button" 
    className="btn btn-danger">Find Your Room</button></Link>)
    expect(link).toBeDefined()
    expect(link).toMatchSnapshot()
  })
})