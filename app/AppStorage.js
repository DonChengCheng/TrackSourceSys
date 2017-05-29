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


    static async getStaffId() {
        return await AsyncStorage.getItem('staff_id');
    }

    static async setStaffId(staffId) {
        await AsyncStorage.setItem('staff_id', staffId);
    }
}