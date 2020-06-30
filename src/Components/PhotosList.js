import axios from 'axios';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ListItem from './ListItem';
import React, {useEffect, useState, useCallback} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const PhotosList = ({navigation}) => {
    let [state, setState] = useState([]);
    let [loadMore, setLoadMore] = useState(false);
    let [nextUrl, setNextUrl] = useState('http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    const fetchData = useCallback(async () => {
        if (loadMore) {
            return;
        }

        setLoadMore(true);
        const result = await axios.get(nextUrl);
        setState([...state, ...result.data]);
        let urls = result.headers.link.split(',');
        setNextUrl(urls[urls.length - 1].split(';')[0].slice(2, -1));
        setLoadMore(false);
    });

    useEffect(() => {
        fetchData();
    }, []);

    return (
            <View>
                {state &&
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                    scrollEventThrottle={16}
                    onScroll={(event) => {
                        if (isCloseToBottom(event.nativeEvent)) {
                            fetchData();
                        }
                    }
                    }>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>See Your Pictures</Text>
                        </View>
                        {state.map((anObjectMapped, index) => {
                            return <ListItem key={`listPhotos${index}`} item={anObjectMapped} navigation={navigation}/>;
                        })}
                    </View>
                </ScrollView>
                }
            </View>
    );
};

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


export default PhotosList;
