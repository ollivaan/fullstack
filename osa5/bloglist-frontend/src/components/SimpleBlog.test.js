import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent } from 'react-testing-library'
import SimpleBlog from './SimpeBlog'

test('SimpleBlog renders content', () => {
  const blog = {
    title: 'test',
    author: 'test',
    likes: 1
  }

  const mock = jest.fn()
  const component = render(
    <SimpleBlog blog={blog} onClick={mock}/>)
  expect(component.container).toHaveTextContent('test')
  expect(component.container).toHaveTextContent('test')
  expect(component.container).toHaveTextContent('blog has 1 likes')
  const button = component.getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)
  expect(mock.mock.calls.length).toBe(2)
})

