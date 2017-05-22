/**
 * Created by Allen on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, TextInput, StyleSheet, ToastAndroid, Button, Platform} from "react-native"
import ScannerModule from "../CommonNativeModule"
import AppStorage from "./AppStorage"

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
        ScannerModule.scannerErcode().then((result) => {
            let content = [{"name": "姓名", "value": this.state.username}, {
                "name": "性别",
                "value": this.state.sex
            },
                {"name": "电话号码", "value": this.state.mobile}]
            let id = "";
            if (result != "") {
                let index = result.indexOf("=", 0);
                if (index != -1) {
                    id = result.slice(index + 1, result.length)
                }
            }

            fetch('http://dm.trtos.com/php/json.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: "add",
                    id: id,
                    content: content
                })
            })
                .then((response) => response.text())
                .then((text) => {
                    if (Platform.OS === 'android') {
                        text = text.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, ''); // If android , I've removed unwanted chars.
                    }
                    return text;
                })
                .then(response=> {
                    AppStorage.setManagerId(id);
                    this.props.navigation.state.params.returnData();
                    ToastAndroid.show(JSON.parse(response).status, ToastAndroid.LONG)
                })
                .catch((error) => {
                    ToastAndroid.show(error.toString(), ToastAndroid.LONG)
                    console.warn(error);
                });
        }, (code, message) => {
            ToastAndroid.show(message, ToastAndroid.LONG)
        })
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
                <Button title="扫一扫提交" onPress={() => this.submitInfo()}/>
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