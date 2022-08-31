export const putUserLoggedInDetail = (data) => {
    return {
        type: 'PUT_USER_LOGGED_IN_DETAIL',
        payload: data
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER',
    }
}
