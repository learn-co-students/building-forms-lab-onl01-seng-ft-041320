// Add BandInput component
import React, { Component } from "react";
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
    name: ""
  };

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: "" });
  };

  render() {
    return (
        <div>
          <label>Add a Band:</label>
          <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.text}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: "ADD_BAND", payload: formData })
});

export default connect(null, mapDispatchToProps)(BandInput);