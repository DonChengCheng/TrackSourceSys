/**
 * Created by hasee on 2017/5/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from "./MainScreen"
import UserScreen from "./UserScreen"
import ManagerScreen from "./ManagerScreen"
import ConfigManagerInfoScreen from "./ConfigManagerInfoScreen"
import ConfigUserInfoScreen from "./ConfigStaffInfoScreen"
import { connect } from 'react-redux';
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


const AppWithNavigationState = ({dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

