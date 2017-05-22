/**
 * Created by hasee on 2017/5/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import MainScreen from "./app/MainScreen"
import UserScreen from "./app/UserScreen"
import ManagerScreen from "./app/ManagerScreen"
import ConfigManagerInfoScreen from "./app/ConfigManagerInfoScreen"
import ConfigUserInfoScreen from "./app/ConfigUserInfoScreen"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    addNavigationHelpers, StackNavigator,
} from 'react-navigation';

export const AppNavigator = StackNavigator({
    Main: {screen: MainScreen},
    User: {screen: UserScreen},
    Manager: {screen: ManagerScreen},
    ConfigManagerInfo: {screen: ConfigManagerInfoScreen},
    ConfigUserInfo: {screen: ConfigUserInfoScreen},
});


const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

