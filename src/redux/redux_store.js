import imagesReducer from '../reducers/imagesReducer'

import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers(
    {images: imagesReducer}
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;
