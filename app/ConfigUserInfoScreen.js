/**
 * Created by hasee on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, TextInput, Button, Picker, StyleSheet} from "react-native"

export default class ConfigUserInfoScreen extends Component {
    state= {
        language:"用户"
    }
    render() {
        return (<View style={styles.container}>
            <View style={styles.itemStyle}>
                <Text>姓名</Text>
                <TextInput></TextInput>
            </View>

            <View style={styles.itemStyle}>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="用户" value="用户" />
                    <Picker.Item label="质检员" value="质检员" />
                    <Picker.Item label="销售员" value="销售员" />
                </Picker>
            </View>
            <View>
                <Button title={"添加"}></Button>
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
    },

    itemStyle:{
        flexDirection:"row"
    }
});