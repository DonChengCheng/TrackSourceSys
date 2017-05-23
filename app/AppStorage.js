/**
 * Created by allen on 2017/5/19.
 */
import {AsyncStorage} from "react-native"
export default class AppStorage {
    static async getManagerId() {
        return await AsyncStorage.getItem('manager_id');
    }

    static async setManagerId(managerId) {
        await AsyncStorage.setItem('manager_id', managerId);
    }
}