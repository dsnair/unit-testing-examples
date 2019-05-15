import React from 'react'
import App from './App'
import { render, cleanup, fireEvent } from 'react-testing-library'

afterEach(cleanup)

test('renders without crashing', () => {
  render(<App />)
})

test('displays initial scoreboard: Strike 0, Ball 0', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('strike').innerHTML).toBe('0')
  expect(getByTestId('ball').innerHTML).toBe('0')
})
