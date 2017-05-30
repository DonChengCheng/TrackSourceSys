/**
 * Created by Allen on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, TextInput, StyleSheet, ToastAndroid, Button, Platform} from "react-native"
import ScannerModule from "../CommonNativeModule"

import AppStorage from "./AppStorage"
import {submitManagerInfo} from "./Net"
export default class ConfigManagerInfoScreen extends Component {
    static navigationOptions = {
        title: '配置管理员信息',
    };
    state = {
        username: "",
        sex: "",
        mobile: "",
        managerId: ""
    }

    submitInfo() {
        let content = [{"name": "姓名", "value": this.state.username}, {
            "name": "性别",
            "value": this.state.sex
        },
            {"name": "电话号码", "value": this.state.mobile}];
        this.props.navigation.dispatch(submitManagerInfo(content))
    }

    render() {
        return (<View style={styles.container}>
            <View style={styles.itemStyle}>
                <Text style={{width: 60, textAlign: 'right'}}>姓名</Text>
                <TextInput onChangeText={(text) => this.setState({username: text})} style={{flex: 1}}></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text style={{width: 60, textAlign: 'right'}}>性别</Text>
                <TextInput onChangeText={(text) => this.setState({sex: text})} style={{flex: 1}}></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text style={{width: 60, textAlign: 'right'}}>电话号码</Text>
                <TextInput onChangeText={(text) => this.setState({mobile: text})} style={{flex: 1}}></TextInput>
            </View>
            <View style={{margin: 10}}>
                <Button title="提交" onPress={() => this.submitInfo()}/>
            </View>
        </View>);

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },

    itemStyle: {
        flexDirection: "row",
        alignItems: "center"

    }
});