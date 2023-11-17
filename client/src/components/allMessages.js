import './allMessages.css'
import {useState, Component} from 'react'
import funcs from './funcs'
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
        funcs.scrollToBottom()
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