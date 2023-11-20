import { useState } from 'react'
import { socket } from '../socket';
import user from '../user';


const Input = ()=>{
    const [input, changeInput] = useState("")
    const send = () => {
        if (input.length > 0) {         
            let username = user.getUsername()
            let message = input
            
            socket.emit('send-message', {username, message})
        }
    }

    return(
        <div id='input'>
            
            <input type='text' onChange={e => changeInput(e.target.value)}></input>
            <button id='send' onClick={send}>Send</button>
        </div>
    )
}


export default Input;