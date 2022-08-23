const getAllChilds = (data) => {
    return {
        type: 'GET_ALL_CHILDS',
        payload: data
    }
}

export default {
    getAllChilds,
}
