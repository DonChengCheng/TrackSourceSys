/**
 * Created by Allen on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, TextInput, StyleSheet, ToastAndroid, Button} from "react-native"
import ScannerModule from "../CommonNativeModule"

export default class ConfigManagerInfoScreen extends Component {
    static navigationOptions = {
        title: '配置管理员信息'
    };
    state = {
        username: "",
        sex: "",
        mobile: ""
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
                <Button title="扫一扫提交" onPress={() => ScannerModule.scannerErcode().then((result) => {
                    let content = "[{" + "\"name\":\"姓名\"," + "\"value\":\"" + this.state.username + "\"}"
                        + "," + "{\"name\":\"性别\"," + "\"value\":\"" + this.state.sex + "\"}" + ","
                        + "{\"name\":\"电话号码\"," + "\"value\":\"" + this.state.mobile + "\"}]"
                    console.warn(content + "------" + result)
                    fetch('http://dm.trtos.com/php/json.php', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            action: 'add',
                            id: result,
                            content: content
                        })
                    })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        return responseJson.status;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                }, (code, message) => {
                    ToastAndroid.show(message, ToastAndroid.LONG)
                })}/>
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