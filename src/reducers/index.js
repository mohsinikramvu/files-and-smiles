import { getClassrooms } from './classroom'
import { getStaff } from './staff'
import {combineReducers} from 'redux'
import {getChilds} from "./child";
import {getUsers} from "./users";

const rootReducer = combineReducers({
    staff: getStaff,
    classrooms: getClassrooms,
    childs: getChilds,
    users: getUsers,
})

export default rootReducer