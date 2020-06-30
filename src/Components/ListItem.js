import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';


const ListItem = (props) => {
    const {item} = props;
    let openImage = function () {
        props.navigation.navigate('ImageView', {url: item.urls.full});
    };
    return (
        item ?
            <TouchableOpacity onPress={openImage}>
                <View style={styles.sectionContainer}>

                    <Image source={{uri: item.urls.thumb}}
                           style={styles.miniImg}/>

                    <View style={styles.imageInfo}>
                        <Text style={styles.imageDescription}>{item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity> : <Text/>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        textAlign: 'center',
    },
    miniImg: {
        width: 100,
        height: 100,
    },
    imageInfo: {},
    imageDescription: {},
});

export default ListItem;
