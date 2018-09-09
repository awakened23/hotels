import { combineReducers } from 'redux';
import hotelsReducer from './src/reducers/HotelsReducer';
import hotelReducer from './src/reducers/HotelReducer';

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    hotel: hotelReducer
});

export default rootReducer;
