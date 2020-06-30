import React from 'react';
import {Image, StyleSheet} from 'react-native';


export default function ImageView({route}) {
    const {url} = route.params;
    return (
        <Image source={{uri: url}}
               style={styles.fullImg}/>
    );
}


const styles = StyleSheet.create({
    fullImg: {
        width: '100%',
        height: '100%',
    },
});
