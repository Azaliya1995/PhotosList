import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/redux/redux_store';


const store = configureStore();

const ReduxWrapper = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxWrapper);
