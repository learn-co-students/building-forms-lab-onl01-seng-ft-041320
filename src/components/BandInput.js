// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    let band = this.state
    console.log(band)
    this.props.addBand(band)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleOnChange}/>
          <button type="submit" className="btn btn-default">Add a Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
