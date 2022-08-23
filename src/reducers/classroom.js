export const getClassrooms = (state = {list: []}, action) => {
    switch(action.type){
        case "GET_ALL_CLASSROOMS":
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}
