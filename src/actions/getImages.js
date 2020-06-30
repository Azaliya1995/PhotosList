import {GET_IMAGES} from '../constants';


export function getImages(images) {
    return {
        type: GET_IMAGES,
        payload: images
    }
};
