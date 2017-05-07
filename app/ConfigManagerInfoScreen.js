/**
 * Created by hasee on 2017/5/7.
 */
/**
 * Created by hasee on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, TextInput, StyleSheet} from "react-native"

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


            <View>
                <Button title={"下一步"} onPress={()=>this.addInfo}></Button>
            </View>
        </View>);
    }
}