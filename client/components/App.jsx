import React from 'react'
import { Route } from 'react-router-dom'

import Game from './Game'
import Score from './Score'
// Import Score Component

const App = () => {
  return (
    <>
      <h1>Who wants to be a Programmer</h1>
      <p>Hello, testing!</p>
      <Score path="/" component={Score} />
      {/* <Route path="/" component={Game} /> */}
    </>
  )
}

export default App
