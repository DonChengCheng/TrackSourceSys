/**
 * Created by hasee on 2017/5/26.
 */

import AppStorage from "../AppStorage"

export function getManagerInfo() {
    return function (dispatch) {
        dispatch({type: 'FETCH_POSTS_REQUEST'})
        return AppStorage.getManagerId()
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
                        dispatch({type: "FETCH_POSTS_SUCCESS", result: responseJson})
                    })
                    .catch((error) => {
                        dispatch({type: "FETCH_POSTS_FAILURE"})
                    });
            }).catch((error) => {
                dispatch({type: "FETCH_POSTS_FAILURE"})
            })
    }
}

export function getUniqueKey() {
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
                dispatch({type: "FETCH_POSTS_SUCCESS", result: responseJson})
            })
            .catch((error) => {
                dispatch({type: "FETCH_POSTS_FAILURE"})
            });
    }

}