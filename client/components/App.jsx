import React from 'react'
import { Route } from 'react-router-dom'

import Game from './Game'
// Import Score Component

const App = () => {
  return (
    <>
      <div className='leftcol'>

      </div>
      <Score />
      <div className='rightcol'>
      <h1>Who wants to be a Programmer</h1>
        <Title />
        <Game />
      </div>
    </>
  )
}

export default App
