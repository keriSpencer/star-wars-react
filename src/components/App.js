import React, { Component } from 'react'
import '../styles/App.css'
import Vehicles from './Vehicles'

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleNameChange = event => {
    this.newPilot = event.target.value
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      pilot: this.newPilot
    })
  }

  // *************   handleSubmit = event => {
  //   event.preventDefault()
  //   this.setState = ({
  //   })
  // }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers,
  //    crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  // in Div below
  /*
  The App component needs the following:
   jumbotron section, form section, vehicle cards section.
   Your form will also need a header in which you will pass the state of the form upon submit.
   */

  // let autos = swapiVehicles.map(vehicle => {
  //   return (
  //     <div key="{vehicle.name}">
  //       <h2>
  //         Vehicle: {vehicle.name}
  //       </h2>
  //     </div>
  //   )
  // })

  /*
  Store vehicles state in a variable.
  Map over this variable to access the values needed to render.
  */

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
