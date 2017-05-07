/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    Navigator
} from 'react-native';
import MainScreen from "./app/MainScreen"
import UserScreen from "./app/UserScreen"

import {
    StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
    Main: {screen: MainScreen},
    User: {screen: UserScreen},
});


AppRegistry.registerComponent('TrackSourceSys', () => App);
