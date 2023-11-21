import { useState } from 'react'
import { socket } from '../socket';
import user from '../user';


const Input = ()=>{
    const [input, changeInput] = useState("")

    const send = () => {
        if (input.length > 0) {         
            let newMsg = {

                username: user.getUsername(),
                message: input,
                created_at: new Date()
            }
            socket.emit('send-message', newMsg)
            changeInput('')
            document.getElementById('msg-input').value = ''

        }
    }

    return(
        <div id='input'>
            
            <input id='msg-input' type='text' onChange={e => changeInput(e.target.value)}></input>
            <button id='send' onClick={send}>Send</button>
        </div>
    )
}


export default Input;