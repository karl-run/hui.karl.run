import React from 'react'

import GibberScroll from './modules/gibberscroll/GibberScroll'

import css from './HackerUI.module.scss'

console.log(css)

const HackerUI = () => (
  <div>
    <h1>TODO</h1>
    <div style={{ display: 'flex' }}>
      <GibberScroll />
      <GibberScroll />
      <GibberScroll />
    </div>
  </div>
)

export default HackerUI
