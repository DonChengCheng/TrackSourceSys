/**
 * Created by hasee on 2017/5/5.
 */
import React, {Component} from "react"
import {View, Button} from "react-native"

export default class ManagerScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <Button title="配置管理员信息"  onPress={()=>navigate("ConfigManagerInfo")} />
            <Button title="添加用户" onPress={()=>navigate("ConfigUserInfo")}  />
        </View>)
    }
}

