/**
 * @author dongchengcheng
 * @since 2017/7/30
 */
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