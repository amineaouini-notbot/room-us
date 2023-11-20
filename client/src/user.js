export const user = {
    username: "_______xxxxxxxxxxxxxxxx_user",
    setUsername: () =>{
        if(!localStorage.getItem(this.username)){
            localStorage.setItem(this.username, prompt('Enter your username!!'))
        }

    },
    getUsername: () => {
        return localStorage.getItem(this.username)
    }

}