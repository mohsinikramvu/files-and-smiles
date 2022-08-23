export const getChilds = (state = {list: []}, action) => {
    switch(action.type){
        case "GET_ALL_CHILDS":
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}
