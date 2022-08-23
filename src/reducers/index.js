import { getClassrooms } from './classroom'
import { getStaff } from './staff'
import {combineReducers} from 'redux'
import {getChilds} from "./child";

const rootReducer = combineReducers({
    staff: getStaff,
    classrooms: getClassrooms,
    childs: getChilds
})

export default rootReducer