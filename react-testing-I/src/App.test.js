import React from 'react';
import App from './App';
import { render, cleanup } from 'react-testing-library';
afterEach(cleanup)

it('renders without crashing', () => {
 render(<App />)
});
