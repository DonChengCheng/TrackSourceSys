/**
 * Created by hasee on 2017/5/7.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class MainScreen extends Component {
    static navigationOptions = {
        title: '溯源系统'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigate('Manager')}
                >
                    <View style={styles.buttonStyle}>
                        <Text>我是管理员</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('User')}
                >
                    <View  style={[styles.buttonStyle, {marginTop:10}]}>
                        <Text>我是职员</Text>
                    </View>

                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonStyle: {
        backgroundColor:"#35F3CF",
        alignItems:"center",
        justifyContent:"center",
        width:160,
        padding:10
    }
});