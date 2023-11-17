import './allMessages.css'
import {useState, Component} from 'react'
import funcs from './funcs'
class AllMessages extends Component{
    constructor(props){
        super(props)
    
        this.state = {messages: [
        {
            username: 'user1',
            message: 'Hiiiiii'
        },{
            username: 'user2',
            message: 'ayyyy hows it going'
        },{
            username: "user1",
            message: "doing all right what about you"
        },{
            username: 'user1',
            message: 'Hiiiiii'
        },{
            username: 'user2',
            message: 'ayyyy hows it going'
        },{
            username: "user1",
            message: "doing all right what about you"
        },{
            username: 'user1',
            message: 'Hiiiiii'
        },{
            username: 'user2',
            message: 'ayyyy hows it going'
        },{
            username: "user1",
            message: "doing all right what about you1111111"
        }

    ]}
    }
    
    render(){

        return (
            <div id='all-messages'>
            {this.state.messages.map(msg =>{
                return (
                    <div>
                        <p className='usernames'>{msg.username}</p>
                        <p className='messages'>{msg.message}</p>
                    </div>
                )
            })}
            </div>
        )
    }
}



export default AllMessages 