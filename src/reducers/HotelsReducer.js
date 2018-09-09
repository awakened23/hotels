import {getHotels as getHotelsFromBackend} from '../api/ApiConnector';

const SET_HOTELS = 'SET_HOTELS';

export default function(state = [], action) {
  switch (action.type) {
    case SET_HOTELS:
      return action.hotels;
    default:
      return state;
  }
}

export function getHotels(){
  return (dispatch)=>{
    getHotelsFromBackend().then((hotels)=>dispatch({
      type: SET_HOTELS,
      hotels
    }))
  }
}