import React, { Component } from "react";
import BandInput from "../components/BandInput";
import Bands from "../components/Bands";

class BandsContainer extends Component {
  render() {
    return (
        <div>
          <BandInput />
          <Bands />
        </div>
    );
  }
}

export default BandsContainer