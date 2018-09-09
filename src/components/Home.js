import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import Rating from './Rating';
import {getHotels} from '../reducers/HotelsReducer';

export class Home extends Component {

    componentDidMount(){
        this.props.getHotels();
    }

    renderHotel(hotel){
        return <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Details', {hotelID: hotel.hotelID})}>
            <View style={styles.hotelBox} key={hotel.hotelID}>
                <View style={styles.hotel}>
                    <View style={styles.imageBox}>
                        <Image source={{uri: hotel.smallImage}}
                        style={styles.image} />
                    </View>
                    <View style={styles.hotelDetailBox}>
                        <Text style={styles.title}>{hotel.hotelName}</Text>
                        <Rating rating={hotel.starRating} style={styles.bigSpace}/>
                        <Text style={styles.detail}>From ${hotel.rate}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>;
    }

    renderListOfHotels(){
        const {hotels} = this.props;
        return hotels && <FlatList data={hotels}
            keyExtractor={(item) => item.hotelID+''}
            renderItem={({item}) => this.renderHotel(item)}
        />
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Hotels in Sydney</Text>
                {this.renderListOfHotels()}
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      hotels: state.hotels
    };
};
  
const mapDispatchToProps = {
    getHotels
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    hotelBox:{
        height: 120,
        marginBottom: 10
    },
    hotel: {
        flex: 1,
        flexDirection: 'row',
    },
    imageBox: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    image:{
        flex:1
    },
    hotelDetailBox: {
        flex: 2,
        marginRight: 10
    },
    header: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        marginVertical: 20,
        marginHorizontal: 10,
    },
    title:{
        fontWeight: 'bold',
        marginBottom: 5
    },
    detail:{
        fontWeight: 'bold',
    },
    bigSpace:{
        marginBottom: 20
    }
});
