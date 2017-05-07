/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import MainScreen from "./app/MainScreen"
import UserScreen from "./app/UserScreen"
import ConfigManagerInfoScreen from "./app/ConfigManagerInfoScreen"
import ConfigUserInfoScreen from "./app/ConfigUserInfoScreen"


import {
    StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
    Main: {screen: MainScreen},
    User: {screen: UserScreen},
    ConfigManagerInfo: {screen: ConfigManagerInfoScreen},
    ConfigUserInfo: {screen: ConfigUserInfoScreen},

});

AppRegistry.registerComponent('TrackSourceSys', () => App);
