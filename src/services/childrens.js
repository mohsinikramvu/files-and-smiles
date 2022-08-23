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
