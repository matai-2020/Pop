import React from 'react'

class Score extends React.Component {
 state = {
   style: {
     backgroundColor: 'grey'
   }
 }

  changeColor = () => {
    this.setState({
      style: {
        backgroundColor: 'green'
      }
    })
  }

  render () {
    return (
      <div>
        <div style={ this.state.style }> <h2>$1,000,000.00</h2> </div>

        <h3>$500,000.00</h3>
        <h3>$250,000.00</h3>
        <h3>$125,000.00</h3>
        <h3>$60,000.00</h3>
        <h3>$30,000.00</h3>
        <h4>$15,000.00</h4>
        <h4>$10,000.00</h4>
        <h5>$5,000.00</h5>
        <h5>$1000.00</h5>
      </div>
    )
  }
}

export default Score
