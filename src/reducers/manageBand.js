export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
  case 'ADD_BAND':
    // console.log('Current state.items length %s', state.bands.length);
    // console.log('Updating state.items length to %s', state.bands.length + 1);
    // console.log('this is the current state', state.bands)
    // debugger;
    return {...state,
    bands: state.bands.concat(action.band)
    //currently tests are saying expected action.band to equal something but it is nothing
    //looks like the tests are sending in the data a different way than I am
    //when they are changing/updating states
    }
    


  default:
    return state}
    
};


// return {
//   ...state,
//   items: state.items.concat(state.items.length + 1)
// }