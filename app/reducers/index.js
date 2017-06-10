
import {AppNavigator} from '../AppNavigator';
import {combineReducers} from 'redux';

const initialManagerState = {managerInfo: null, isLoading: true};
const managerReducer = (state = initialManagerState, action) => {
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

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const initialStaffState = {staffInfo: null, isLoading: true};
const staffReducer = (state = initialStaffState, action) => {
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

const appReducer = combineReducers({
    nav: navReducer,
    manager:managerReducer,
    staff:staffReducer
});

export default appReducer


