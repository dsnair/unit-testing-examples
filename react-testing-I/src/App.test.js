import React from 'react'
import App from './App'
import { render, cleanup, fireEvent } from 'react-testing-library'

afterEach(cleanup)

test('renders without crashing', () => {
  render(<App />)
})

describe('Strike Button', () => {
  test('increments Strike score', () => {
    // attach getByTestId, getAllByText function to the rendered div (DOM node)
    const { getByTestId, getAllByText } = render(<App />)
    // find button, not paragraph, from nodelist that has text 'Strike'
    const strikeBtn = getAllByText('Strike')[1]
    // fire Strike button click event
    fireEvent.click(strikeBtn)
    // check if text content of DOM node with id 'strike' is '1'
    expect(getByTestId('strike').innerHTML).toBe('1')
  })

  test(`Strike score doesn't exceed 2`, () => {
    const { getByTestId, getAllByText } = render(<App />)
    const strikeBtn = getAllByText('Strike')[1]
    // fire Strike button click event 3 times
    fireEvent.click(strikeBtn)
    fireEvent.click(strikeBtn)
    fireEvent.click(strikeBtn)
    expect(getByTestId('strike').innerHTML).toBe('0')
  })
})

describe('Ball Button', () => {
  test('increments Ball score', () => {
    const { getByTestId, getAllByText } = render(<App />)
    fireEvent.click(getAllByText('Ball')[1])
    expect(getByTestId('ball').innerHTML).toBe('1')
  })

  test(`Ball score doesn't exceed 3`, () => {
    const { getByTestId, getAllByText } = render(<App />)
    const ballBtn = getAllByText('Ball')[1]
    fireEvent.click(ballBtn)
    fireEvent.click(ballBtn)
    fireEvent.click(ballBtn)
    fireEvent.click(ballBtn)
    expect(getByTestId('ball').innerHTML).toBe('0')
  })
})

describe('Scoreboard Display', () => {
  test('initial scoreboard is 0', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('strike').innerHTML).toBe('0')
    expect(getByTestId('ball').innerHTML).toBe('0')
  })

  test('reset scoreboard to 0 at 3 strikes or 4 balls', () => {
    const { getByTestId, getAllByText } = render(<App />)
    const strikeBtn = getAllByText('Strike')[1]
    const ballBtn = getAllByText('Ball')[1]
    // fire Strike button click event 3 times
    fireEvent.click(strikeBtn)
    fireEvent.click(strikeBtn)
    fireEvent.click(strikeBtn)
    expect(getByTestId('strike').innerHTML).toBe('0')
    expect(getByTestId('ball').innerHTML).toBe('0')
    // fire Ball button click event 4 times
    fireEvent.click(ballBtn)
    fireEvent.click(ballBtn)
    fireEvent.click(ballBtn)
    fireEvent.click(ballBtn)
    expect(getByTestId('strike').innerHTML).toBe('0')
    expect(getByTestId('ball').innerHTML).toBe('0')
  })
})

describe('Hit Button', () => {
  test('resets scoreboard to 0', () => {
    const { getByTestId, getByText } = render(<App />)
    fireEvent.click(getByText('Hit')) // fire Hit button click event once
    expect(getByTestId('strike').innerHTML).toBe('0')
    expect(getByTestId('ball').innerHTML).toBe('0')
  })
})
