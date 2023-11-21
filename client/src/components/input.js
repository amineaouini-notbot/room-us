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
        if (this.state.input.length > 0) {         
            let newMsg = {

                username: user.getUsername(),
                message: this.state.input,
                created_at: new Date()
            }
            socket.emit('send-message', newMsg)
            this.setState({input: ''})
            document.getElementById('msg-input').value = ''

        }
    }

    componentDidMount(){
        var msgInput = document.getElementById("msg-input");

        // Execute a function when the user presses a key on the keyboard
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