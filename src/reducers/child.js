export const getChilds = (state = {list: [], childID: 0, checkInStatus: false}, action) => {
    switch(action.type){
        case "GET_ALL_CHILDS":
            return {
                ...state,
                list: action.payload
            }
        case "PUT_CHILD_ID":
            const childFound = state.list.find((obj) => obj.id === parseInt(action.payload));
            return {
                ...state,
                checkInStatus: childFound && childFound.checkin_status !== 0,
                childID: action.payload
            }
        case "PUT_CHECK_IN_STATUS":
            console.log(action.payload, "Action Payload");
            const child = state.list.find((obj) => obj.id === parseInt(action.payload.selectedChild));
            const indexFound = state.list.findIndex((obj => obj.id === child.id));
            child.checkin_status = action.payload.status ? 1 : 0;
            state.list[indexFound] = child;
            return {
                ...state,
                checkInStatus: action.payload.status
            }
        default:
            return state;
    }
}
