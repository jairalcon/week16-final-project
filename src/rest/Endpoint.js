// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

const USERS_ENDPOINT =
    "https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users";
    console.log('current users:', USERS_ENDPOINT);

class UsersAPI {
    //Send Request
    get = async () => {
        try {
            const resp = await fetch(USERS_ENDPOINT);
            const data = await resp.json();
            console.log('getting data:', data);
            // window.location = "/leaderboard";
            return data;
        } catch (error) {
            console.log("Oh no! There was an error with getting your user data.", error);
        }
    };

    //Update request
    put = async (user) => {
        try {
            const resp = await fetch(`${USERS_ENDPOINT}/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            return await resp.json();
        } catch (error) {
            console.log(
                "Oh no! There was an error with updating your user data.",
                error
            );
        }
    };

    //Update request
    apiEdit = async (userId, userData) => {
        let userIdArr = userId;
        console.log(
            "mainAPI apiEdit productURL:",
            `${USERS_ENDPOINT}/${userIdArr[0].slice(5)}`
        );
        // console.log("mainAPI apiEdit userId:", userIdArr[0].slice(5));
        // console.log("mainAPI apiEdit userData:", userData[0].slice(9));
        try {
            const resp = await fetch(
                `${USERS_ENDPOINT}/${userIdArr[0].slice(5)}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        user: userData[0],
                    }),
                }
            );
            await resp.json();
            return (window.location = "/");
        } catch (error) {
            console.log("Oh no! There was an error with editing your login.", error);
        }
    };

    //Post request
    post = async (username) => {
        console.log("mainAPI post:", username);
        try {
            const response = await fetch(`${USERS_ENDPOINT}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username[0],
                    score: username[1]
                    // product: user[1],
                    // user: user[2],
                }),
            });
            console.log("mainAPI postResponse:", response);
            await response.json();
            // (window.location = "/reviews");
            console.log('response:', response);
            // return (window.location = "/quiz");
        } catch (error) {
            console.log("Oh no! There was an error with adding a user data.", error);
        }
    };

    //Delete request
    apiDelete = async (usernameId) => {
        try {
            const resp = await fetch(`${USERS_ENDPOINT}/${usernameId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify(reviewId),
            });
            await resp.json();
            return (window.location = "/");
        } catch (error) {
            console.log("Oh no! There was an error with deleting user data.", error);
        }
    };
}

//A new instance must be create and can then import that to other components
export const usersAPI = new UsersAPI();