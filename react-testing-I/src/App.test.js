import React from 'react'
import App from './App'
import { render, cleanup, fireEvent } from 'react-testing-library'

afterEach(cleanup)

test('renders without crashing', () => {
  render(<App />)
})

test('displays initial scoreboard: Strike 0, Ball 0', () => {
  // attach getByTestId function to the rendered div (DOM node)
  const { getByTestId } = render(<App />)
  // use getByTestId() to find DOM nodes with ids: 'strike', 'ball'
  expect(getByTestId('strike').innerHTML).toBe('0')
  expect(getByTestId('ball').innerHTML).toBe('0')
})

describe('Strike Button', () => {
  test('increments Strike score', () => {
    const { getByTestId, getAllByText } = render(<App />)
    // find button, not paragraph, named Strike
    const strikeBtn = getAllByText('Strike')[1]
    // fire Strike button click event
    fireEvent.click(strikeBtn)
    expect(getByTestId('strike').innerHTML).toBe('1')
  })

  test(`Strike score doesn't exceed 2`, () => {
    const { getByTestId, getAllByText } = render(<App />)
    // find button, not paragraph, named Strike
    const strikeBtn = getAllByText('Strike')[1]
    // fire Strike button click event 3 times
    fireEvent.click(strikeBtn)
    fireEvent.click(strikeBtn)
    fireEvent.click(strikeBtn)
    expect(getByTestId('strike').innerHTML).toBe('0')
  })
})
