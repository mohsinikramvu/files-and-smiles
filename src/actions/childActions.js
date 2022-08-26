export const getAllChilds = (data) => {
    return {
        type: 'GET_ALL_CHILDS',
        payload: data
    }
}

export const putChildID = (data) => {
    console.log(data);
    return {
        type: 'PUT_CHILD_ID',
        payload: data
    }
}

export const putCheckInStatus = (data) => {
    return {
        type: 'PUT_CHECK_IN_STATUS',
        payload: data
    }
}
