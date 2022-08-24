export const getAllClassrooms = (data) => {
    return {
        type: 'GET_ALL_CLASSROOMS',
        payload: data
    }
}

export const createClassroom = () => {
    return {
        type: 'CREATE_CLASSROOM'
    }
}
