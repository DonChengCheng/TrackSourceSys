/**
 * @author dongchengcheng
 * @since 2017/5/30
 */

import React, {Component} from "react";
import {View, Text, ToastAndroid, StyleSheet, TouchableOpacity, Switch } from "react-native"
import ScannerModule from "../CommonNativeModule";
import {submitUserInfo} from "./utils/Net";
import AppStorage from "./utils/AppStorage"
import ProductInfoForUser from './component/ProductInfoForUser'
import {getStaffInfo} from "./model/Staff";

export default class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            isStaff: false,
        }
        this.props.navigation.setParams({isStaff: false})
    }
    static navigationOptions = ({navigation}) => ({
        title: '我是用户',
        headerRight: <TouchableOpacity onPress={() => {
            ScannerModule.scannerErcode().then((result) => {
                navigation.dispatch(getStaffInfo(result, (result) => {
                    if(navigation.state.params.isStaff) {
                        result.map((item) => {
                            if (item.Name === "职位") {
                                AppStorage.setIdentifyInfo(item.Value);
                                navigation.navigate('AddProductInfo')
                            }
                        });
                    } else {
                        let content = [{"name": "姓名", "value": this.state.username}, {
                            "name": "性别",
                            "value": this.state.sex
                        }, {"name": "职位", "value": this.state.type}]
                        navigation.dispatch(submitUserInfo(result, content, (json)=>{
                            ToastAndroid.show(json.msg, ToastAndroid.LONG)
                            navigation.goBack();
                        }, (error)=>{
                            ToastAndroid.show(error, ToastAndroid.LONG)
                        }))
                    }


                }))
            }, (code, message) => {
                ToastAndroid.show(message, ToastAndroid.LONG)
            })
        }}><Text style={{fontSize: 16, marginRight: 5}}>扫一扫</Text></TouchableOpacity>
    });




    switchChange(val) {
        this.props.navigation.setParams({isStaff: val})
        this.setState({isStaff: val})
    }

    render() {
        return (<View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Switch value={this.state.isStaff} onValueChange={this.switchChange.bind(this)}></Switch>
                <Text style={{
                    flex: 1,
                    textAlign: 'right',
                    color: 'black'
                }}>{this.state.isStaff ? '我是职员' : '我是普通用户'}</Text>
            </View>
            {this.state.isStaff && <ProductInfoForUser/>}
            <Text style={{color: "black", textAlign: "center", marginTop: 80}}>如果您是普通用户，可以直接扫一扫；
                如果您是普通职员，需要扫描管理员设置的二维码进行身份认证</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 10
    }
})
