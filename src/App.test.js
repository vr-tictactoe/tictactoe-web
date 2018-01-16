import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  const header = wrapper.find('Provider')
});
