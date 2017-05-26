
import {AppNavigator} from '../AppNavigator';
import {combineReducers} from 'redux';

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



const appReducer = combineReducers({
    nav: navReducer,
    manager
});

export default appReducer


