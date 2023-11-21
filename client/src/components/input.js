import React from 'react'
import { socket } from '../socket';
import user from '../user';


class Input extends React.Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.send = this.send.bind(this)
        this.changeInput = this.changeInput.bind(this)
        
    }
    
    changeInput(e){
        e.preventDefault()
        this.setState({ input: e.target.value})
        
    }
    
    send(){
        // if input is not empty send new msg
        if (this.state.input.length > 0) {  
            let newMsg = {

                username: user.getUsername(),
                message: this.state.input,
                created_at: new Date()
            }

            socket.emit('send-message', newMsg) // send msg with socket
            this.setState({input: ''}) // empty input state
            document.getElementById('msg-input').value = '' // empty input in front

        }
    }

    componentDidMount(){
        
        // Make event on enter-key pressed to send message
        
        let msgInput = document.getElementById("msg-input");
        msgInput.addEventListener("keypress", function(event) {
          // If the user presses the "Enter" key on the keyboard
          if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("send").click();
          }
        }); 
    }

    render(){
        return(
            <div id='input'>
            
            <input id='msg-input' type='text' onChange={this.changeInput}></input>
            <button id='send' onClick={this.send}>Send</button>
        </div>)

    }
} 


export default Input;