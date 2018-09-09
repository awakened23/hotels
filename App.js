import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './src/components/Home';
import Details from './src/components/Details';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  
const StackNavigator = createStackNavigator(
    {
        Home,
        Details
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#F5FCFF',
            }
        },
    }
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StackNavigator/>
            </Provider>
        );
    }
}