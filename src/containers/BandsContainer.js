import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addBand } from '../actions/actions';
import BandsInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandsInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map(band => <li key={band.name}>{band.name}</li>)}
        </ul>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {bands: state.bands}
}

export default connect(mapStateToProps, { addBand })(BandsContainer)
