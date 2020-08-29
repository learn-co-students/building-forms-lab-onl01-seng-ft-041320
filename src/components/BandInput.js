// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: '',
  }

handleChange = event => {
  
  this.setState({
    [event.target.name] : event.target.value
  });
  // console.log("we are changing this state",this.state)
}

handleSubmit = event => {
  event.preventDefault()
  // console.log('when submitting this is the state',this.state.undefined)
  let band =  this.state
console.log('this is the BAND name', band.name)
  // debugger;
  
  this.props.addBand(band)
  this.setState({
    name: ''
  })
}

// componentDidUpdate(){
//   console.log("in the update component", this.props.addBand)
// }

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
