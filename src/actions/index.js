import { getAllClassrooms, createClassroom, putClassroomID } from "./classroomActions"
import { getAllStaff } from "./staffActions"
import { getAllChilds, putChildID, putCheckInStatus } from "./childActions"

const allActions = {
    getAllClassrooms,
    createClassroom,
    putClassroomID,
    getAllStaff,
    getAllChilds,
    putChildID,
    putCheckInStatus
}

export default allActions
