/**
 * Created by hasee on 2017/5/26.
 */

import AppStorage from "./AppStorage"

export function getManagerInfo() {
    return function (dispatch) {
        dispatch({type: 'FETCH_POSTS_REQUEST'})
        return AppStorage.getManagerId()
            .then((id) => {
                fetch("http://dm.trtos.com/php/dm.php", {
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
                        if (responseJson.ret == 0) {
                            dispatch({type: "FETCH_POSTS_SUCCESS", result: responseJson.data})
                        } else {
                            dispatch({type: "FETCH_POSTS_FAILURE", msg: responseJson.msg})
                        }

                    })
                    .catch((error) => {
                        dispatch({type: "FETCH_POSTS_FAILURE", msg: "网络异常"})
                    });
            }).catch((error) => {
                dispatch(getUniqueKey((id)=>{
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
                            dispatch({type: "SUBMIT_MANAGER_INFO_SUCCESS", msg: responseJson.msg})
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

/**
 * 提交职员信息
 * @param content 职员信息
 * @returns {Function}
 */
export function submitStaffInfo(content) {
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
                         console.warn(JSON.stringify(responseJson))
                        if (responseJson.ret == 0) {
                            let content = [{"name": "职员", "value": id}]
                            dispatch(submitManagerInfo(content))
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


export function getUniqueKey(successCallback) {
    console.warn("getUniqueKey run-----");
    return function (dispatch) {
        return fetch("http://dm.trtos.com/php/dm.php", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: "getid",
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.warn(JSON.stringify(responseJson)+"--------")
                dispatch({type: "FETCH_POSTS_SUCCESS", result: null})
                successCallback(responseJson.data.id)
            })
            .catch((error) => {
                dispatch({type: "FETCH_POSTS_FAILURE", msg: "网络异常"})
            });
    }

}