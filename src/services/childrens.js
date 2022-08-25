export const getAllChildBelongsToClass =  async (id) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/get_kids_from_room/${id}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
            }
        });
        return await response.json();
    } catch (e) {
        return e;
    }
}

export const saveChildTemperature =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_temprature_activity`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(params)
        });
        return await response.json();
    } catch (e) {
        return e;
    }
}
