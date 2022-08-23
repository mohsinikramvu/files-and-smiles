export const getStaff = (state = {}, action) => {
    switch(action.type){
        case "GET_ALL_STAFF":
        return ['Staff 001', 'Staff 002', 'Staff 003'];
        default:
            return state
    }
}
