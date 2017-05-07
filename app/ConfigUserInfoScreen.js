/**
 * Created by hasee on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, TextInput, Button, StyleSheet} from "react-native"

export default class ConfigManagerInfoScreen extends Component {
    render() {
        return (<View style={styles.container}>
            <View style={styles.itemStyle}>
                <Text>姓名</Text>
                <TextInput></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text>性别</Text>
                <TextInput></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text>职位</Text>
                <TextInput></TextInput>
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