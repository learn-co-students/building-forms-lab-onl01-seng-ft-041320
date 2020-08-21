import React from 'react';

const Bands = props => {


    // console.log(props)
return (
    
    <div>
        {props.bands.map(band => {
           return <li>{band.name}</li> 
        })}

    </div>
)
}

export default Bands