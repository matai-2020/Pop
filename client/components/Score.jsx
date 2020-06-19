import React from 'react'

class Score extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      l1: 'green',
      l2: 'none',
      l3: 'none'
    }
  }

  styling = () => {
    // for (let i = 1; i < 11; i++) {
    //   let id = i.toString()
    //   let elementID = document.getElementById(id)

    //   console.log(elementID)

    //   const divtemp =

    // const level = this.state.arr.find(x => x.key === this.props.currentLevel)
    const prevLevel = Number(this.props.currentLevel) - 1
    this.setState({
      [`l${this.props.currentLevel}`]: 'green',
      [`l${prevLevel}`]: 'none'
    })
  }

  //   if (Number(elementID) === this.props.currentLevel) {
  //     this.setState({
  //       style: {
  //         backgroundColor: 'green'
  //       }
  //     })
  //   }
  //   return (<p>Hello</p>)
  // }
  componentDidMount () {
    console.log(this.props.currentLevel)
    this.styling()
  }

  render () {
    return (
      <div className="score">
        <div id="10" className="level">
          {this.props.currentLevel === 10
            ? <h2 style={{ backgroundColor: 'orange' }}>$1,000,000.00</h2>
            : <h2>$1,000,000.00</h2>
          }
        </div>
        <div id="9" className="level">
          {this.props.currentLevel === 9
            ? <h3 style={{ backgroundColor: 'orange' }}>$500,000.00</h3>
            : <h3>$500,000.00</h3>
          }
        </div>
        <div id="8" className="level">
          {this.props.currentLevel === 8
            ? <h3 style={{ backgroundColor: 'orange' }}>$250,000.00</h3>
            : <h3>$250,000.00</h3>
          }
        </div>
        <div id="7" className="level">
          {this.props.currentLevel === 7
            ? <h3 style={{ backgroundColor: 'orange' }}>$125,000.00</h3>
            : <h3>$125,000.00</h3>
          }
        </div>
        <div id="6" className="level">
          {this.props.currentLevel === 6
            ? <h3 style={{ backgroundColor: 'orange' }}>$60,000.00</h3>
            : <h3>$60,000.00</h3>
          }
        </div>
        <div id="5" className="level">
          {this.props.currentLevel === 5
            ? <h3 style={{ backgroundColor: 'orange' }}>$30,000.00</h3>
            : <h3>$30,000.00</h3>
          }
        </div>
        <div id="4" className="level">
          {this.props.currentLevel === 4
            ? <h4 style={{ backgroundColor: 'orange' }}>$15,000.00</h4>
            : <h4>$15,000.00</h4>
          }
        </div>
        <div id="3" className="level" >
          {this.props.currentLevel === 3
            ? <h4 style={{ backgroundColor: 'orange' }}>$10,000.00</h4>
            : <h4>$5,000.00</h4>
          }
        </div>
        <div id="2" className="level">
          {this.props.currentLevel === 2
            ? <h5 style={{ backgroundColor: 'orange' }}>$5,000.00</h5>
            : <h5>$5,000.00</h5>
          }
        </div>
        <div id="1" className="level">
          {this.props.currentLevel === 1
            ? <h5 style={{ backgroundColor: 'orange' }}>$1,000.00</h5>
            : <h5>$1,000.00</h5>
          }
        </div>

      </div>
    )
  }
}

export default Score
