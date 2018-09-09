import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function({rating, style}){
    const circles = [];
    for(let i=1;i<=5;i++){
        const diff = rating-i;
        let circle=require('../../images/hc_circle_grey.gif');

        if(diff>=0){
            circle=require('../../images/hc_circle.gif');
        }else if(diff<0 && diff>-1){
            circle=require('../../images/hc_circle_half.gif');
        }
        circles.push(<Image key={i} source={circle} />);
    }
    return <View style={[styles.rating, style]}>
        {circles}
    </View>;
}

const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
    }
});