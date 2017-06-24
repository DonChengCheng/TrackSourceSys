/**
 * Created by hasee on 2017/5/5.
 */

import React, {Component} from "react";
import {View, Text, ToastAndroid, StyleSheet, TouchableOpacity} from "react-native"
import ScannerModule from "../CommonNativeModule";
import {getStaffInfo} from "./Net";
import AppStorage from "./AppStorage"

export default class UserScreen extends Component {
    static navigationOptions = ({navigation})=> ({
        title: '我是用户',
        headerRight:<TouchableOpacity onPress={() => ScannerModule.scannerErcode().then((result) => {
            navigation.dispatch(getStaffInfo(result, (result)=>{
                result.map((item)=>{
                    if(item.Name === "职位") {
                        AppStorage.setIdentifyInfo(item.Value)
                    }
                });

            }))
        }, (code, message) => {
            ToastAndroid.show(message, ToastAndroid.LONG)
        })}><Text style={{fontSize:16, marginRight:5}}>扫一扫</Text></TouchableOpacity>
    });
    render() {
        return (<View style={[styles.container, {flex: 1, justifyContent: "center", alignItems: "center"}]}>
            <Text style={{color: "black", textAlign:"center", margin:20}}>如果您是普通用户，可以直接扫一扫；
                如果您是普通职员，需要扫描管理员设置的二维码进行身份认证</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        margin:10
    }
})
