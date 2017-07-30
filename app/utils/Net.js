/**
 * @author dongchengcheng
 * @since 2017/5/30
 */


export function getInfo(id, successCallback, failCallback) {
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
            successCallback(responseJson)
        })
        .catch((error) => {
            failCallback(error)
        });
}

/**
 * 提交用户信息
 * @param id  产品id
 * @param content 产品内容
 * @param successCallback
 * @returns {Function}
 */
export function submitUserInfo(id, content, successCallback, failCallback) {
    return function (dispatch) {
        dispatch({type: 'FETCH_STAFF_REQUEST'})
        return fetch("http://dm.trtos.com/php/dm.php", {
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
                    successCallback(responseJson)
                } else {
                    failCallback(responseJson.msg)
                }
            })
            .catch((error) => {
                failCallback("网络异常")
            });
    }
}

export function getUniqueKey(successCallback) {
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
                successCallback(responseJson.data.id)
            })
            .catch((error) => {
                dispatch({type: "FETCH_POSTS_FAILURE", msg: "网络异常"})
            });
    }

}

