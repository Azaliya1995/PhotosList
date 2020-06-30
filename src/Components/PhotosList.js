import axios from 'axios';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ListItem from './ListItem';
import React, {useEffect, useState, useCallback} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getImages} from '../actions/getImages';
import {connect} from 'react-redux';

const PhotosList = (props) => {
    let { navigation } = props;

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    useEffect(() => {
        props.getImages(props.url);
        console.log(props)
    }, []);

    return (
        <View>
            {props.images &&
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
                scrollEventThrottle={16}
                onScroll={(event) => {
                    if (isCloseToBottom(event.nativeEvent) && !props.isLoading) {
                        props.getImages(props.url);
                    }
                }
                }>
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>See Your Pictures</Text>
                    </View>
                    {props.images.map((anObjectMapped, index) => {
                        return <ListItem key={`listPhotos${index}`} item={anObjectMapped} navigation={navigation}/>;
                    })}
                </View>
            </ScrollView>
            }
        </View>
    );
};

const mapStateToProps = state => ({
    images: state.photosList.images,
    isLoading: state.photosList.isLoading,
    url: state.photosList.url
});

const mapDispatchToProps = dispatch => ({
    getImages: (url) => dispatch(getImages(url)),
});

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.3)',
    },
    miniImg: {
        width: 50,
        height: 50,
    },
    imageInfo: {},
    imageTitle: {},
    imageCreator: {},
});


export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);
