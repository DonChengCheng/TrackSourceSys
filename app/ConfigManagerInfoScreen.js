/**
 * Created by Allen on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, TextInput, StyleSheet} from "react-native"

export default class ConfigManagerInfoScreen extends Component {
    static navigationOptions = {
        title: '配置管理员信息'
    };
    render() {
        return (<View style={styles.container}>
            <View style={styles.itemStyle}>
                <Text style={{width:60, textAlign: 'right'}}>姓名</Text>
                <TextInput style={{flex:1}}></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text style={{width:60, textAlign: 'right'}}>性别</Text>
                <TextInput style={{flex:1}}></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text style={{width:60, textAlign: 'right'}}>电话号码</Text>
                <TextInput style={{flex:1}}></TextInput>
            </View>
            <View>
                {/*<Button title={"下一步"} onPress={()=>this.addInfo}></Button>*/}
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
        flexDirection:"row",
        alignItems:"center"

    }
});