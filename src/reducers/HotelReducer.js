import {getHotel as getHotelFromBackend} from '../api/ApiConnector';

const SET_HOTEL = 'SET_HOTEL';

export default function(state = null, action) {
  switch (action.type) {
    case SET_HOTEL:
      return action.hotel;
    default:
      return state;
  }
}

export function getHotel(hotelID){
  return (dispatch)=>{
    getHotelFromBackend(hotelID).then((hotel)=>dispatch({
      type: SET_HOTEL,
      hotel
    }))
  }
}

export function resetHotel(){
  return {
    type: SET_HOTEL,
    hotel: null
  }
}