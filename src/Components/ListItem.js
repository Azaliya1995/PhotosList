import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {setImageViewUrl} from '../actions/getImages';
import {connect} from 'react-redux';


const ListItem = (props) => {
    const {item} = props;
    let openImage = function () {
        props.setImageUrl(item.urls.full);
        props.navigation.navigate('ImageView');
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

const mapDispatchToProps = dispatch => ({
    setImageUrl: (url) => dispatch(setImageViewUrl(url)),
});

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
});

export default connect(null, mapDispatchToProps)(ListItem);
