import React from 'react'
import { Route } from 'react-router-dom'

import Question from './Question'
import Answers from './Answers'

const Game = () => {
  return (
    <>
      <Route path="/" component={Question} />
      <Route path="/" component={Answers} />
    </>
  )
}

export default Game
