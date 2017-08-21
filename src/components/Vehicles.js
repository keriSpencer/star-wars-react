import React, { Component } from 'react'
import '../styles/App.css'

class Vehicles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      swapiVehicles: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/').then(r => r.json()).then(json => {
      console.log('Data from componentDidMount fetch', json.results)
      this.setState({ swapiVehicles: json.results })
    })
  }

  render() {
    let autos = this.state.swapiVehicles.map(vehicle => {
      return (
        <div id="cardId" className="card" key={vehicle.name}>
          <h4>
            Vehicle: {vehicle.name}
          </h4>
          <h6>
            Model: {vehicle.model}
          </h6>
          <div id="specs">
            <h6>Specs</h6>
            <ul>
              <li>
                Manufacturer: {vehicle.manufacturer}
              </li>
              <li>
                Class: {vehicle.vehicle_class}
              </li>
              <li>
                Passengers: {vehicle.passengers}
              </li>
              <li>
                Crew: {vehicle.crew}
              </li>
              <li>
                Length: {vehicle.length}
              </li>
              <li>
                Max Speed: {vehicle.max_atmosphering_speed}
              </li>
              <li>
                Cargo Capacity: {vehicle.cargo_capacity}
              </li>
            </ul>
          </div>
        </div>
      )
    })

    return (
      <div className="quake-list">
        <div className="row">
          {autos}
        </div>
      </div>
    )
  }
}

export default Vehicles
