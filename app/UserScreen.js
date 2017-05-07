/**
 * Created by hasee on 2017/5/5.
 */

import React, {Component} from "react";
import {View, Button, ToastAndroid, StyleSheet} from "react-native"
import ScannerModule from "../CommonNativeModule"

export default class UserScreen extends Component {
    render() {
        return (<View style={styles.container}>
            <Button title="扫一扫"  onPress={()=>ScannerModule.scannerErcode().then(function (result) {
                ToastAndroid.show(result, ToastAndroid.LONG)
            }).catch(function (error) {
                ToastAndroid.show(error, ToastAndroid.LONG)
            })} />
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
