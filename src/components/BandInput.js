// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      band: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input
              type="text"
              value={this.state.name}
              placeholder="band name"
              onChange={(event) => this.handleOnChange(event)} />
          </p>
            <input type="submit" />
        </form>
      </div>
    )
  }
}

// why don't we need this? 
// export default connect(null, { addBand })(BandInput)

export default BandInput

