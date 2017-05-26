import AppStorage from "../AppStorage"
import {AppNavigator} from '../AppNavigator';
import {combineReducers} from 'redux';
import {Platform} from 'react-native';
const initialState = {managerInfo: null, isLoading: true};
const manager = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_REQUEST":
            return {...state, isLoading: true};
        case "FETCH_POSTS_FAILURE":
            return {...state, isLoading: false};
        case "FETCH_POSTS_SUCCESS":
            return {...state, isLoading: false, managerInfo: action.result}
        default:
            return state;
    }
}

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};


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
const appReducer = combineReducers({
    nav: navReducer,
    manager
});

export default appReducer


