import {GET_IMAGES_SUCCESS, GET_IMAGES_FAILURE, GET_IMAGES_STARTED, SET_IMAGE_VIEW_URL} from '../constants';
import {getNextUrl} from '../helpers/headers_parser';

const initialState = {
    images: [],
    isLoading: false,
    url: "http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0",
    selectedImageUrl: ""
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES_SUCCESS:
            const {data, headers} = action.payload;
            return { ...state, images: [...state.images, ...data], isLoading: false, url: getNextUrl(headers.link)};
        case GET_IMAGES_FAILURE:
            return {...state, isLoading: false};
        case GET_IMAGES_STARTED:
            return {...state, isLoading: true};
        case SET_IMAGE_VIEW_URL:
            return {...state, selectedImageUrl: action.payload};
        default:
            return state;
    }
};

export default imagesReducer;
