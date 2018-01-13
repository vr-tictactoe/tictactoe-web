import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Testing NavBar', () => {
  const wrapper = shallow(<div />)
  test('Should render LInk', () => {
    const link = wrapper.find('Link')
    expect(link).toBeDefined()
  })
  test('Should render button', () => {
    const button = wrapper.find('button')
    expect(button).toBeDefined()
  })
  test('Should render nav', () => {
    const nav = wrapper.find('nav')
    expect(nav).toBeDefined()
  })
  test('Button should handle click event', () => {
    window.alert = jest.fn()
    const output = shallow(<button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={this.logoutHandle.bind(this)}>Logout</button>)
    output.simulate('click')
    expect(window.alert).toHaveBeenCalledWith('clicked')
  })
})