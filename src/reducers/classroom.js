export const getClassrooms = (state = {list: [], classroomID: 0}, action) => {
    switch(action.type){
        case "GET_ALL_CLASSROOMS":
            return {
                ...state,
                list: action.payload
            }
        case "PUT_CLASSROOM_ID":
            return {
                ...state,
                classroomID: action.payload
            }
        default:
            return state;
    }
}
