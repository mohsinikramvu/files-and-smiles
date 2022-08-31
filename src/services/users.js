export const performLogin =  async (params) => {
    try {
        const response = await fetch(`http://3.142.228.212/api/user_login`, {
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
    // try {
        // let matchingResponse = {
        //     username: "admin",
        //     password: "123456",
        //     status: false
        // }
        // return new Promise((resolve, reject) => {
        //     if (matchingResponse.username === params.username && matchingResponse.password === params.password) {
        //         matchingResponse.status = true
        //         resolve(matchingResponse)
        //     } else {
        //         reject(matchingResponse)
        //     }
        // }).then((response) => {
        //     return response;
        // }).catch((error) => {
        //     return error;
        // })
    // } catch (e) {
    //     return e;
    // }
}
