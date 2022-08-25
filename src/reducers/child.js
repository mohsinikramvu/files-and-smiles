export const getChilds = (state = {list: [], childID: 0, checkInStatus: false}, action) => {
    switch(action.type){
        case "GET_ALL_CHILDS":
            return {
                ...state,
                list: action.payload
            }
        case "PUT_CHILD_ID":
            return {
                ...state,
                childID: action.payload
            }
        case "PUT_CHECK_IN_STATUS":
            const updateChildCheckInStatus = action.payload.child;
            const indexFound = state.list.findIndex((obj => obj.id === action.payload.child.id));
            updateChildCheckInStatus.checkin_status = action.payload.checkInStatus ? 1 : 0;
            state.list[indexFound] = updateChildCheckInStatus;
            return {
                ...state,
                checkInStatus: action.payload.checkInStatus
            }
        default:
            return state;
    }
}
