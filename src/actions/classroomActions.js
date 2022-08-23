const getAllClassrooms = (data) => {
    return {
        type: 'GET_ALL_CLASSROOMS',
        payload: data
    }
}

const createClassroom = () => {
    return {
        type: 'CREATE_CLASSROOM'
    }
}

export default {
    getAllClassrooms,
    createClassroom
}
