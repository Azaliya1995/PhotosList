import imagesReducer from '../reducers/imagesReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers(
    {photosList: imagesReducer}
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;
