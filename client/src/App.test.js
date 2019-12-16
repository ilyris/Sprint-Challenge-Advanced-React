import React from 'react';
import ReactDOM from 'react-dom';
import DataDisplayContainer from './DataDisplayContainer';
import Card from './Card';
import { shallow } from 'enzyme';
import DarkModeButton from './DarkModeButton';
import Adapter from 'enzyme-adapter-react-15';

// it('Container renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<DataDisplayContainer />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('Cards render without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Card />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('body does exist', () => {
  const div = document.querySelector('body');
  console.log(div);
});

test('body does not have dark toggle class', () => {
  const div = document.querySelector('body');
  let expected;

  if(!div.classList.contains('dark-mode')) {
    expected = true;
  }
    expect(expected).toBe(true)
});

// describe('Test Dark Mode Button component', () => {
//   it('Test toggle event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<DarkModeButton onClick={mockCallBack}>Ok!</DarkModeButton>));
//     button.find('.toggle').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });
