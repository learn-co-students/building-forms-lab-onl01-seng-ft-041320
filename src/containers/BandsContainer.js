import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map(band => <li key={band.name}>{band.name}</li>)}
      </div>
    )
  }
}

const mapSTP = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapSTP, { addBand })(BandsContainer)
