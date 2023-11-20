import './allMessages.css'
import {Component} from 'react'
import funcs from './funcs'
import user from '../user'
import { socket } from '../socket'

class AllMessages extends Component{
    constructor(props){
        super(props)
        
        this.state = {messages: [
        {
            username: 'user1',
            message: 'Hiiiiii',
            created_at: new Date()
        },{
            username: 'user2',
            message: 'ayyyy hows it going',
            created_at: new Date()
        },{
            username: "user1",
            message: "doing all right what about you",
            created_at: new Date()
        },{
            username: 'user1',
            message: 'Hiiiiii',
            created_at: new Date()
        },{
            username: 'user2',
            message: 'ayyyy hows it going',
            created_at: new Date()
        },{
            username: "user1",
            message: "doing all right what about you",
            created_at: new Date()
        },{
            username: 'user1',
            message: 'Hiiiiii',
            created_at: new Date()
        },{
            username: 'user2',
            message: 'ayyyy hows it going',
            created_at: new Date()
        },{
            username: "user1",
            message: "doing all right what about you1111111",
            created_at: new Date()
        }

    ]}
    }

    componentDidMount(){
        user.setUsername()
        funcs.scrollToBottom()
        socket.on('send-message', msg => {
            console.log(msg)
            //this.state.messages = this.state.messages.concat(msg)
            this.setState({messages: this.state.messages.concat(msg)})
        })
    }
    render(){

        return (
            <div id='all-messages'>
            {this.state.messages.map((msg, i)=>{
                return (
                    <div className='message-container'>
                        <div className='message'>
                            <div>
                                <p className='usernames'>{msg.username}</p>
                            
                            </div>
                            <div>
                                <p className='message-content'>{msg.message}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}



export default AllMessages 