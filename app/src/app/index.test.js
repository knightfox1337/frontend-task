/* global it */
import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from "@testing-library/react"
import data from '../data.json'
import App from './index.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App data={data} />, div)

})


it('loads json from file', () => {
    expect(data).toBeInstanceOf(Object)
})

it('should increment or decrement the like total on button press', () => {
    
    const {container} = render(<App data={data} />)

    expect(container.querySelector("#postLike").getAttribute('aria-label')).toBe('Like this post')

    const likePostBtn = container.querySelector('#postLike')
    likePostBtn.click()

    expect(container.querySelector("#postLike").getAttribute('aria-label')).toBe('You have already liked this')
    
})

