/**
 * Created by hasee on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, TextInput, Button, Picker, StyleSheet, ToastAndroid} from "react-native"
import ScannerModule from "../CommonNativeModule"

export default class ConfigUserInfoScreen extends Component {
    state = {
        username: "",
        sex: "",
        type: "出货员"
    }

    static navigationOptions = {
        title: '添加职员信息'
    }

    componentDidMount() {
        this.props.navigation.dispatch(getUniqueKey((id)=>{
            AppStorage.setStaffId(id)
        }))
    }

    submitInfo() {
        AppStorage.getStaffId().then((id)=>{
            let content = [{"name": "姓名", "value": this.state.username}, {
                "name": "性别",
                "value": this.state.sex
            }, {"name": "职位", "value": this.state.type}]
            fetch('http://dm.trtos.com/php/dm.php', {
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
                .then((response) => response.json())
                .then((responseJson) => {
                    ToastAndroid.show(responseJson.status, ToastAndroid.LONG)
                })
                .catch((error) => {
                    ToastAndroid.show(error.toString(), ToastAndroid.LONG)
                });
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
                <Text style={{width: 60, textAlign: 'right'}}>职位</Text>
                <Picker style={{flex: 1}}
                        selectedValue={this.state.type}
                        onValueChange={(type) => this.setState({language: type})}>
                    <Picker.Item label="出货员" value="出货员"/>
                    <Picker.Item label="质检员" value="质检员"/>
                    <Picker.Item label="销售员" value="销售员"/>
                </Picker>
            </View>
            <View style={{margin: 10}}>
                <Button title={"添加"} onPress={() => this.submitInfo()}></Button>
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