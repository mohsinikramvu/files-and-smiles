import { getAllClassrooms, createClassroom, putClassroomID } from "./classroomActions"
import { getAllStaff } from "./staffActions"
import { getAllChilds, putChildID, putCheckInStatus } from "./childActions"
import { putUserLoggedInDetail, logoutUser } from "./userActions"

const allActions = {
    getAllClassrooms,
    createClassroom,
    putClassroomID,
    getAllStaff,
    getAllChilds,
    putChildID,
    putCheckInStatus,
    putUserLoggedInDetail,
    logoutUser
}

export default allActions
