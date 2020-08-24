import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <h2>Bands</h2>
        <ul>
          {this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => {
  return {
    bands: bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addBand: (formData) => dispatch({type: 'ADD_BAND', band: formData})
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
