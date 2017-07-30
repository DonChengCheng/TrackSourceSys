/**
 * @author dongchengcheng
 * @since 2017/7/30
 */
import AppStorage from "../utils/AppStorage";
import {submitManagerInfo} from "./Manage";

const initialStaffState = {staffInfo: null, isLoading: true};
export default staffReducer = (state = initialStaffState, action) => {
    switch (action.type) {
        case "FETCH_STAFF_REQUEST":
            return {...state, isLoading: true};
        case "FETCH_STAFF_FAILURE":
            return {...state, isLoading: false, msg:action.msg};
        case "FETCH_STAFF_SUCCESS":
            return {...state, isLoading: false, msg:action.msg}
        default:
            return state;
    }
}

/**
 * 提交职员信息
 * @param content 职员信息
 * @returns {Function}
 */
export function submitStaffInfo(content, successCallback) {
    return function (dispatch) {
        dispatch({type: 'FETCH_STAFF_REQUEST'})
        return AppStorage.getStaffId()
            .then((id) => {
                fetch("http://dm.trtos.com/php/dm.php", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        action: "add",
                        id: id,
                        content: content
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.ret == 0) {
                            let managerContent = [{"name": "职员", "value": id}]
                            dispatch(submitManagerInfo(managerContent))
                            successCallback(responseJson.msg)
                        } else {
                            dispatch({type: "FETCH_STAFF_FAILURE", msg: responseJson.msg})
                        }

                    })
                    .catch((error) => {
                        dispatch({type: "FETCH_POSTS_FAILURE", msg: "网络异常"})
                    });
            }).catch((error) => {

            })
    }
}

export function getStaffInfo(id, successCallback) {
    return function (dispatch) {
        return fetch("http://dm.trtos.com/php/dm.php", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: "get",
                id: id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                successCallback(responseJson)
                // console.warn(JSON.stringify(responseJson))
            })
    }
}