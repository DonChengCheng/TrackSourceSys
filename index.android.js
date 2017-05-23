/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import AppReducer from './app/reducers';
import AppWithNavigationState from './app/AppNavigator';
import {createLogger} from 'redux-logger'
const middleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger())
}

class TrackSourceApp extends React.Component {
    store = createStore(AppReducer, applyMiddleware(...middleware));

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('TrackSourceSys', () => TrackSourceApp);

