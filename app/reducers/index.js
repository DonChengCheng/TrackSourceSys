/**
 * @author dongchengcheng
 * @since 2017/7/30
 */
import {combineReducers} from 'redux';
import Manage from '../model/Manage';
import Staff from '../model/Staff';
import Nav from '../model/Nav';

const appReducer = combineReducers({
    nav: Nav,
    manager: Manage,
    staff: Staff
});

export default appReducer


