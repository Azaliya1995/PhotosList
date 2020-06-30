import {GET_IMAGES_SUCCESS, GET_IMAGES_FAILURE, GET_IMAGES_STARTED, SET_IMAGE_VIEW_URL} from '../constants';
import axios from 'axios';

export const getImages = (url) => {
    return dispatch => {

        dispatch(getImagesStarted());

        axios.get(url)
            .then(res => {
                dispatch(getImagesSuccess(res));
                console.log(res);
            })
            .catch(err => {
                dispatch(getImagesFailure(err));
                console.log(err);
            });
    };
};

const getImagesSuccess = images => ({
    type: GET_IMAGES_SUCCESS,
    payload: images,
});

const getImagesStarted = () => ({
    type: GET_IMAGES_STARTED,
});

const getImagesFailure = error => ({
    type: GET_IMAGES_FAILURE,
    payload: {
        error,
    },
});

export const setImageViewUrl = url => ({
    type: SET_IMAGE_VIEW_URL,
    payload: url,
});
