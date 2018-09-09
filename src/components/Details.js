import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {getHotel, resetHotel} from '../reducers/HotelReducer';
import Rating from './Rating';

export class Details extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {getHotel, navigation} = this.props;
        getHotel(navigation.getParam('hotelID'));
    }

    componentWillUnmount(){
        this.props.resetHotel();
    }

    render() {
        const {hotel} = this.props;
        
        return hotel && (
            <ScrollView style={styles.container}>
                <Image source={{uri: hotel.largeImage}}
                        style={styles.image} />
                <View style={styles.hotelDetailBox}>
                    <Text style={styles.title}>{hotel.hotelName}</Text>
                    <View style={styles.row}>
                        <Rating rating={hotel.starRating}/>
                        <Text style={styles.detail}>From ${hotel.rate}</Text>
                    </View>
                    <Text style={[styles.detail, styles.bigSpace]}>{hotel.numberOfReviews.toLocaleString()} reviews</Text>
                    <Text style={[styles.gray, styles.space]}>DESCRIPTION</Text>
                    <Text style={[styles.detail, styles.space]}>{hotel.address}</Text>
                    <Text style={[styles.space]}>{hotel.description}</Text>
                </View>
            </ScrollView>
        );
    }
}

function mapStateToProps(state){
    return {
      hotel: state.hotel
    };
};
  
const mapDispatchToProps = {
    getHotel,
    resetHotel
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Details);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    image:{
        height: 300
    },
    hotelDetailBox:{
        marginVertical: 10,
        marginHorizontal: 20,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 7
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 7
    },
    detail:{
        fontWeight: 'bold',
    },
    bigSpace: {
        marginBottom: 30
    },
    space:{
        marginBottom: 12
    },
    gray:{
        color: 'gray'
    }
});
