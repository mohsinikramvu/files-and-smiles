export const getAllClassroomsService =  async () => {
    try {
        const response = await fetch(`http://3.142.228.212/api/allclassrooms/1`, {
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
