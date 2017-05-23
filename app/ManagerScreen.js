/**
 * Created by hasee on 2017/5/5.
 */
import React, {Component} from "react"
import {View, StyleSheet, Button, Text, ActivityIndicator, TouchableOpacity} from "react-native"
import {connect} from 'react-redux';
import {getManagerInfo} from '../app/reducers';

class ManagerScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '我是管理员',
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('ConfigManagerInfo')}><Text
            style={{fontSize: 16, marginRight: 5}}>配置</Text></TouchableOpacity>
    });

    componentWillMount() {
        this.props.dispatch(getManagerInfo())
    }


    _renderManagerInfo(item) {
        return (<View style={{flex: 1, flexDirection: "row"}}>
            <Text style={{color: "black"}}>{item.Name}:</Text>
            <Text style={{color: "black"}}>{item.Value}</Text>
        </View>)
    }

    render() {
        const {navigate} = this.props.navigation;
        if (this.props.isLoading) {
            return (<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={{height: 80}}
                    size="large"
                />
            </View>)
        } else {
            if (this.props.managerInfo != null) {
                return (<View style={styles.container}>
                    {this.props.managerInfo.map((item) => this._renderManagerInfo(item))}
                    <Button onPress={navigate('ConfigUserInfo')} title={"添加职员"}></Button>
                    <Button onPress={navigate('ConfigUserInfo')} title={"查看身份二维码"}></Button>
                </View>);
            } else {
                return (<View style={[styles.container, {flex: 1, justifyContent: "center", alignItems: "center"}]}>
                    <Text style={{color: "black", textAlign: "center", margin: 20}}>您还没有配置管理员信息，请点击右上角的按钮配置管理员信息</Text>
                </View>)
            }
        }

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

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    managerInfo: state.managerInfo
});

export default connect(mapStateToProps)(ManagerScreen);

