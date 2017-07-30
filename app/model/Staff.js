/**
 * @author dongchengcheng
 * @since 2017/7/30
 */
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