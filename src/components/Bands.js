import React from "react";

import {connect} from 'react-redux'

const Bands = props => {
    const bands = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>;
    });

    return <div>{bands}</div>;
};

const mapStateToProps = state => {
    return { bands: state.bands };
};


export default connect(mapStateToProps)(Bands);