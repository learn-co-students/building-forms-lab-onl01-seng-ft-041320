import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  render() {
    // console.log("what are props in BandsContainer when rendered", this.props)
    // debugger;
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
         {/* {console.log("i'm in the render", this.props)} */}
         
        { this.props.bands.length !== 0 ?
        this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)
        : <li>nothing yet</li>
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addBand: (band) => dispatch({type: 'ADD_BAND', band})
  }
}

const mapStateToProps =(state) =>{
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)


// return{
//   addBand: (band) => dispatch(addBand(band))
//   }

//