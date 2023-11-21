const user = {
    username: "_______xxxxxxxxxxxxxxxx_user",
    setUsername: () =>{
        if(!localStorage.getItem(user.username)){ // get username and store it in localStorage
            localStorage.setItem(user.username, prompt('Enter your username!!'))
        }

    },
    getUsername: () => { // get username if stored
        return localStorage.getItem(user.username)
    }

}
export default user
