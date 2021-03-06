import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import Game from './Game'

import questionsData from '../../data/questionData'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <Route path="/" render={() => {
            return (
              <>
                <Game data={questionsData} />
              </>
            )
          }} />
        </>
      </Router>
    )
  }
}

export default App
