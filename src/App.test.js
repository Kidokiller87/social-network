import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom'
import React from 'react'
import MainApp from "./App";

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

it ('renders without crashing', ()=> {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
