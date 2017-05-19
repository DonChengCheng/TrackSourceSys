/**
 * Created by hasee on 2017/5/5.
 */
import React, {Component} from "react"
import {View, StyleSheet, Button, Text, ActivityIndicator, TouchableOpacity} from "react-native"
import AppStorage from "./AppStorage"

export default class ManagerScreen extends Component {
    static navigationOptions = ({navigation})=>({
        title: '我是管理员',
        headerRight:<TouchableOpacity onPress={() => navigation.navigate('ConfigManagerInfo')}><Text style={{fontSize:16, marginRight:5}}>配置</Text></TouchableOpacity>
    });

    state = {
        managerInfo: null,
        loading: true
    }

    componentWillMount() {
        AppStorage.getManagerId()
            .then((id) => {
                fetch("http://dm.trtos.com/php/json.php", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        action: "get",
                        id: id,
                    })
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({managerInfo: responseJson, loading: false})
                })
                .catch((error) => {
                    this.setState({loading: false})
                });
            }).catch((error) => {
            this.setState({loading: false})
        });
    }

    _renderManagerInfo(item) {
        return (<View style={{flex: 1, flexDirection: "row"}}>
            <Text style={{color: "black"}}>{item.Name}:</Text>
            <Text style={{color: "black"}}>{item.Value}</Text>
        </View>)
    }

    render() {
        if (this.state.loading) {
            return (<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={{height: 80}}
                    size="large"
                />
            </View>)
        } else {
            if (this.state.managerInfo != null) {
                return (<View style={styles.container}>
                    {this.state.managerInfo.map((item) => this._renderManagerInfo(item))}
                    <Button title={"添加职员"}></Button>
                </View>);
            } else {
                return (<View style={[styles.container, {flex: 1, justifyContent: "center", alignItems: "center"}]}>
                    <Text style={{color: "black", textAlign:"center", margin:20}}>您还没有配置管理员信息，请点击右上角的按钮配置管理员信息</Text>
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

