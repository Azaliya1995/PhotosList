import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PhotosList from './src/Components/PhotosList';
import ImageView from './src/Components/ImageView';

const Stack = createStackNavigator();

const App: () => React$Node = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PhotosList">
                <Stack.Screen
                    name="PhotosList"
                    component={PhotosList}
                />
                <Stack.Screen name="ImageView" component={ImageView}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
