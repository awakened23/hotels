// @flow
import hotelsJson from './dummy_data/hotels.json';

// Simulation of API calls
export const getHotels = () => new Promise(resolve => {
    const hotels = hotelsJson.map(h => ({
        hotelID: h.hotelID,
        hotelName: h.hotelName,
        starRating: h.starRating,
        rate: h.rate,
        smallImage: h.smallImage,
    }));
    setTimeout(() => resolve(hotels), 1000);
});

export const getHotel = (hotelID: number) => new Promise(resolve => {
    const hotel = hotelsJson.find(h => h.hotelID === hotelID);
    setTimeout(() => resolve(hotel), 1000);
});

