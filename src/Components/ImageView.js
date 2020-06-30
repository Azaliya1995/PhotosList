import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';


function ImageView(props) {
    return (
        <Image source={{uri: props.url}}
               style={styles.fullImg}/>
    );
}

const mapStateToProps = state => ({
    url: state.photosList.selectedImageUrl,
});


const styles = StyleSheet.create({
    fullImg: {
        width: '100%',
        height: '100%',
    },
});


export default connect(mapStateToProps, null)(ImageView);
