import React from 'react'

class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      level: 0
    }
  }

  nextLevel = (choice) => {
    if (this.props.data[this.state.level].answer === choice) {
      this.setState({
        level: this.state.level + 1
      })
    }
  }

  render () {
    const stage = this.props.data[this.state.level]
    return (
      <div>
        <h1>{stage.question}</h1>
        {stage.choices.map((choice, i) => {
          return <div className="choices" key={i} onClick={() => this.nextLevel(choice)} to="/">
            {choice}
          </div>
        })}
      </div>
    )
  }
}

export default Game
