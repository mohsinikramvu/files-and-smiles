export const getUsers = (state = {user: null, isLoggedInStatus: false}, action) => {
    switch(action.type){
        case "PUT_USER_LOGGED_IN_DETAIL":
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                user: action.payload.user,
                isLoggedInStatus: true
            }
        case "LOGOUT_USER":
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                isLoggedInStatus: false
            }
        default:
            return state;
    }
}
