/**
 * @author dongchengcheng
 * @since 2017/7/30
 */
import AppStorage from "../utils/AppStorage";
import {getInfo, getUniqueKey} from "../utils/Net";

const initialManagerState = {managerInfo: null, isLoading: true};
export default managerReducer = (state = initialManagerState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_REQUEST":
            return {...state, isLoading: true};
        case "FETCH_POSTS_FAILURE":
            return {...state, isLoading: false};
        case "FETCH_POSTS_SUCCESS":
            return {...state, isLoading: false, managerInfo: action.result}
        case "SUBMIT_MANAGER_INFO_SUCCESS":
            return {...state, msg: action.msg, isLoading: false}
        case "SUBMIT_MANAGER_INFO_FAILURE":
            return {...state, msg: action.msg, isLoading: false}
        default:
            return state;
    }
}

export function getManagerInfo() {
    return function (dispatch) {
        dispatch({type: 'FETCH_POSTS_REQUEST'})
        return AppStorage.getManagerId()
            .then((id) => {
                getInfo(id, (json) => {
                    if (json.ret == 0) {
                        dispatch({type: "FETCH_POSTS_SUCCESS", result: json.data})
                    } else {
                        dispatch({type: "FETCH_POSTS_FAILURE", msg: json.msg})
                    }
                }, (error) => {
                    dispatch({type: "FETCH_POSTS_FAILURE", msg: "网络异常"})
                })
            }).catch((error) => {
                dispatch(getUniqueKey((id) => {
                    AppStorage.setManagerId(id)
                }))
            })
    }
}

/**
 * 提交管理员信息
 * @param content 管理员的信息
 * @returns {Function}
 */
export function submitManagerInfo(content) {
    return function (dispatch) {
        return AppStorage.getManagerId()
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
                            dispatch(getManagerInfo())
                        } else {
                            dispatch({type: "SUBMIT_MANAGER_INFO_SUCCESS", msg: responseJson.msg})
                        }

                    })
                    .catch((error) => {
                        dispatch({type: "SUBMIT_MANAGER_INFO_FAILURE", msg: "网络异常"})
                    });
            }).catch((error) => {

            })
    }
}