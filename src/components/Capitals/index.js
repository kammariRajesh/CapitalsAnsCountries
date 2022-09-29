import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  countryDisplay = () => {
    const selectElement = document.getElementById('select')
    const capital = selectElement.value
    const a = countryAndCapitalsList.filter(
      each => each.capitalDisplayText === capital,
    )
    return this.setState({country: a[0].country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="card1">
          <h1>Countries and Capitals</h1>
          <select id="select" onChange={this.countryDisplay}>
            {countryAndCapitalsList.map(each => (
              <option value={each.capitalDisplayText} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <span> is capital of which country ?</span>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
