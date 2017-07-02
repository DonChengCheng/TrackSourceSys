/**
 * Created by hasee on 2017/6/24.
 */
import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native'


export default class ProductInfoForUser extends Component{

    render() {
        let {width} = Dimensions.get('window');
        return (<View style={styles.container}>
            <View style={styles.itemStyle}>
                <Text style={{width:40, textAlign: 'right'}}>项目</Text>
                <TextInput style={{width:width}}></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text style={{width:40, textAlign: 'right'}}>描述</Text>
                <TextInput style={{width:width}}></TextInput>
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
    },

    itemStyle:{
        flexDirection:"row",
        alignItems:"center"

    }
});