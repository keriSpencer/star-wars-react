import React, { Component } from 'react'
import '../styles/App.css'
import Vehicles from './Vehicles'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }
  }

  handleNameChange = event => {
    this.newPilot = event.target.value
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      pilot: this.newPilot
    })
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>Star Wars</h1>
          <p id="subtitle">The Vehicles of Star Wars</p>
        </div>
        <div className="jumbotron">
          <form onSubmit={this.handleSubmit} className="form">
            <h3>What is your name, pilot?</h3>
            <input
              onChange={this.handleNameChange}
              className="col-lg-4 col-lg-offset-4"
              name="name"
              placeholder="Enter your name"
            />
            <input onChange={this.handleNameChange} type="Submit" value="Submit" />
          </form>
          <h3 id="pilot">
            {this.state.pilot}
          </h3>
        </div>
        <div>
          <Vehicles />
        </div>
      </div>
    )
  }
}

export default App
