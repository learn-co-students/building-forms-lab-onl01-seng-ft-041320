import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
        {console.log("in the app.js render", this.props)}
        {console.log("in the app.js render", this.state)}
      </div>
    );
  }
};

export default App;
