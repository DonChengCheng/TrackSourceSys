/**
 * Created by hasee on 2017/5/5.
 */

import React, {Component} from "react";
import {View, Button, ToastAndroid, StyleSheet} from "react-native"
import ScannerModule from "../CommonNativeModule"

export default class UserScreen extends Component {
    static navigationOptions = {
        title: '我是职员'
    };
    render() {
        return (<View style={styles.container}>
            <Button title="扫一扫" onPress={() => ScannerModule.scannerErcode().then((result) => {
                ToastAndroid.show(result, ToastAndroid.LONG)
            }, (code, message) => {
                ToastAndroid.show(message, ToastAndroid.LONG)
            })}/>

        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center"
    }
})
