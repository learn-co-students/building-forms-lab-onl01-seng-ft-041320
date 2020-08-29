export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
  case 'ADD_BAND':
   
    return {...state,
    bands: state.bands.concat(action.band)
   
    }
    


  default:
    return state}
    
};

// let newBandsArray = state.bands.concat(action.band)
//console.log('in reducer', newBandsArray[0].name)

 //currently tests are saying expected action.band to equal something but it is nothing
    //looks like the tests are sending in the data a different way than I am
    //when they are changing/updating states

// return {
//   ...state,
//   items: state.items.concat(state.items.length + 1)
// }

  // console.log('Current state.items length %s', state.bands.length);
    // console.log('Updating state.items length to %s', state.bands.length + 1);
    // console.log('this is the current state', state.bands)
    // debugger;