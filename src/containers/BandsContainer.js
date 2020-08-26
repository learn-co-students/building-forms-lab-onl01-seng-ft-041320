import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { bands: state.bands }
// }
// or more concisely:
const mapStateToProps = ({ bands }) => ({ bands })

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: (newBand) => {
//       dispatch(addBand(newBand))
//     }
//   }
// }
// or more concisely:
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
// or more concisely (if addBand is imported from actions/reducer):
// export default connect(mapStateToProps, { addBand })(BandsContainer)
