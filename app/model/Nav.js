/**
 * @author dongchengcheng
 * @since 2017/7/30
 */
import {AppNavigator} from '../AppNavigator';
export default navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};