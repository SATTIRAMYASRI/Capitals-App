import {Component} from 'react'
import Countries from '../Countries'
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
  state = {capitalResult: countryAndCapitalsList[0].country}

  onCapitalChanged = event => {
    const filteredList = countryAndCapitalsList.filter(
      eachList => eachList.id === event.target.value,
    )
    this.setState({capitalResult: filteredList[0].country})
  }

  render() {
    const {capitalResult} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              className="select-container"
              onChange={this.onCapitalChanged}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <Countries countryDetails={eachCountry} key={eachCountry.id} />
              ))}
            </select>
            is capital of which country?
          </div>
          <p className="para">{capitalResult}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
