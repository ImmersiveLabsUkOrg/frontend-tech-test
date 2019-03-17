import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a githubs users info', () => {
  let wrapper = mount(<App />)
  expect(wrapper.find("stonefarmer9")).toBeTruthy()
})
