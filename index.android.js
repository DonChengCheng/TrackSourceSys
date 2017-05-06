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
    ToastAndroid
} from 'react-native';

export default class TrackSourceSys extends Component {
    showInfo(msg) {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.showInfo("我是普通用户")}
                    >
                    <View  style={styles.buttonStyle}>
                        <Text>我是普通用户</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.showInfo("我是管理员")}
                >
                    <View style={[styles.buttonStyle, {marginTop:10}]}>
                        <Text>我是管理员</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonStyle: {
        backgroundColor:"#35F3CF",
        alignItems:"center",
        justifyContent:"center",
        width:160,
        padding:10
    }
});

AppRegistry.registerComponent('TrackSourceSys', () => TrackSourceSys);
