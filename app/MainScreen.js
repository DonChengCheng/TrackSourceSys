/**
 * Created by hasee on 2017/5/7.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';

export default class MainScreen extends Component {
    static navigationOptions = {
        title: '溯源系统'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{margin:40}}>
                    <Button
                        onPress={() => navigate('Manager')}
                        title={"我是管理员"}
                    >
                    </Button>
                </View>

                <View style={{margin:40}}>
                    <Button
                        onPress={() => navigate('User')}
                        title={"我是职员"}>
                    </Button>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});