/**
 * Created by Allen on 2017/5/7.
 */
import React, {Component} from "react"
import {View, Text, Picker, StyleSheet, TextInput} from "react-native"


export default class AddProductInfoScreen extends Component {
    state = {
        appraise:"优"
    }
    render() {
        let type = 0;
        if(type == 0) {
            return (<View style={styles.container}>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>职位</Text>
                    <Picker style={{flex:1}}
                            selectedValue={this.state.appraise}
                            onValueChange={(appraise) => this.setState({appraise: appraise})}>
                        <Picker.Item label="优" value="优" />
                        <Picker.Item label="良" value="良" />
                        <Picker.Item label="中" value="中" />
                        <Picker.Item label="差" value="差" />
                    </Picker>
                </View>

            </View>);
        } else if(type == 2){
            return (<View style={styles.container}>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>销售员姓名</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>销售员联系方式</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>用户姓名</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>用户联系方式</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
            </View>);
        } else if(type == 3) {
            return (<View style={styles.container}>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>出货员姓名</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>出货员联系方式</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>出货单</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
            </View>);
        } else {
            return (<View style={styles.container}>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>项目</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
                <View style={styles.itemStyle}>
                    <Text style={{width:60, textAlign: 'right'}}>描述</Text>
                    <TextInput style={{flex:1}}></TextInput>
                </View>
            </View>);
        }
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