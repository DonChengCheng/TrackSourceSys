/**
 * Created by hasee on 2017/5/5.
 */
import React, {Component, PropTypes} from "react"
import {View, StyleSheet, Button, Text, ActivityIndicator, TouchableOpacity, ScrollView} from "react-native"
import {connect} from 'react-redux';
import {getManagerInfo} from './Net';
import ScannerModule from "../CommonNativeModule";
import AppStorage from "./AppStorage"

class ManagerScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '我是管理员',
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('ConfigManagerInfo')}><Text
            style={{fontSize: 16, marginRight: 5}}>配置</Text></TouchableOpacity>
    });

    componentDidMount() {
        this.props.navigation.dispatch(getManagerInfo())
    }


    _renderManagerInfo(item,index) {
        return (<View key={index} style={{flex: 1, flexDirection: "row", alignItems: "center", marginTop: 10}}>
            <Text style={{color: "grey", marginLeft: 5, fontSize: 18}}>{item.Name}:</Text>
            <Text style={{color: "black", marginLeft: 10, fontSize: 18}}>{item.Value}</Text>
        </View>)
    }

    render() {
        const {navigate} = this.props.navigation;
        if (this.props.isLoading) {
            return (<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator
                    animating={true}
                    style={{height: 80}}
                    size="large"
                />
            </View>)
        } else {
            if (this.props.managerInfo != null) {
                return (
                    <ScrollView style={styles.container}>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 1, margin: 8}}>
                                <Button onPress={() => {
                                    navigate('ConfigUserInfo')
                                }} title={"添加职员"}></Button>
                            </View>
                            <View style={{flex: 1, margin: 8}}>
                                <Button onPress={() => {
                                    AppStorage.getManagerId().then((managerId)=> {
                                        ScannerModule.generateErcode(managerId)
                                    })
                                }} title={"查看身份二维码"}></Button>
                            </View>
                        </View>
                        {this.props.managerInfo.map((item) => this._renderManagerInfo(item))}
                    </ScrollView>);
            } else {
                return (<View style={[styles.container, {flex: 1, justifyContent: "center", alignItems: "center"}]}>
                    <Text style={{color: "black", textAlign: "center", margin: 20}}>您还没有配置管理员信息，请点击右上角的按钮配置管理员信息</Text>
                </View>)
            }
        }

    }
}

ManagerScreen.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    managerInfo: PropTypes.array,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },

    itemStyle: {
        flexDirection: "row",
        alignItems: "center"

    }
});

const mapStateToProps = state => ({
    isLoading: state.manager.isLoading,
    managerInfo: state.manager.managerInfo
});

export default connect(mapStateToProps)(ManagerScreen);

