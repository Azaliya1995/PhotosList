import {GET_IMAGES} from '../constants';

const initialState = {
    images: [],
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default imagesReducer;
