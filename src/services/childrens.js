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

export const saveChildSleep =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_sleep_activity`, {
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

export const saveChildFood =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_kid_food`, {
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

export const saveChildFluids =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_fluids_activity`, {
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

export const saveChildSupply =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_supplies`, {
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

export const saveChildNotes =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_notes`, {
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

export const saveChildNameToFace =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_nameToFace`, {
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

export const saveChildToilet =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_kid_toilet_info`, {
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

export const saveChildMood =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/save_kid_mood`, {
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
