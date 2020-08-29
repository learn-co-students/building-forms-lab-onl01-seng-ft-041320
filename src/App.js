import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
        
        
      </div>
    );
  }
};

export default App;
//{console.log("in the app.js render", this.props)}