// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: '',
  }

handleChange = event => {
  
  this.setState({
    name : event.target.value
  });
 
}

handleSubmit = event => {
  event.preventDefault()
  
  let band =  this.state

  // debugger;
  
  this.props.addBand(band)
  this.setState({
    name: ''
  })
}


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput


 // console.log("we are changing this state",this.state)
 // console.log('when submitting this is the state',this.state.undefined)

 // componentDidUpdate(){
//   console.log("in the update component", this.props.addBand)
// }
//console.log('this is the BAND name', band.name)
