/**
 * Created by hasee on 2017/5/5.
 */

import React, {Component} from "react";
import {View, Text, ToastAndroid, StyleSheet, TouchableOpacity, Switch, TextInput, Button} from "react-native"
import ScannerModule from "../CommonNativeModule";
import {getStaffInfo} from "./Net";
import AppStorage from "./AppStorage"
import ProductInfoForUser from './component/ProductInfoForUser'

export default class UserScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '我是用户',
        headerRight: <TouchableOpacity onPress={() => ScannerModule.scannerErcode().then((result) => {
            navigation.dispatch(getStaffInfo(result, (result) => {
                result.map((item) => {
                    if (item.Name === "职位") {
                        AppStorage.setIdentifyInfo(item.Value)
                    }
                });

            }))
        }, (code, message) => {
            ToastAndroid.show(message, ToastAndroid.LONG)
        })}><Text style={{fontSize: 16, marginRight: 5}}>扫一扫</Text></TouchableOpacity>
    });
    state = {
        isStaff: false,
    }

    switchChange(val){
        this.setState({isStaff:val})
    }

    render() {
        let content;
        if(this.state.isStaff) {
            content = <ProductInfoForUser/>;
        }
        return (<View style={styles.container}>
            <Switch value={this.state.isStaff} onValueChange={this.switchChange.bind(this)}></Switch>
            <Text style={{color: "black", textAlign: "center", marginTop: 20}}>如果您是普通用户，可以直接扫一扫；
                如果您是普通职员，需要扫描管理员设置的二维码进行身份认证</Text>
            {content}
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems:'flex-start',
        margin: 10
    }
})
