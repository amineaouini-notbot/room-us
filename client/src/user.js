const user = {
    username: "_______xxxxxxxxxxxxxxxx_user",
    setUsername: () =>{
        if(!localStorage.getItem(user.username)){
            localStorage.setItem(user.username, prompt('Enter your username!!'))
        }

    },
    getUsername: () => {
        return localStorage.getItem(user.username)
    }

}
export default user
