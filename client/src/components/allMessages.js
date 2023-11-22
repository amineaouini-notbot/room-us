import './allMessages.css'
import {Component} from 'react'
import funcs from './funcs'
import user from '../user'
import { socket } from '../socket'
import { GrLinkBottom } from "react-icons/gr";

class AllMessages extends Component{
    constructor(props){
        super(props)
        this.state = {
            messages: [],
            onBottom: true
        }
        this.onScroll = this.onScroll.bind(this)
        this.scroll = this.scroll.bind(this)
    }
    scroll(){
        funcs.scrollToBottom() // scroll to bottom on icon click 
    }
    onScroll(e){ 
        const {scrollHeight, scrollTop, clientHeight} = e.target
        // when not in bottom show scroll-to-bottom icon
        if(scrollTop + clientHeight < scrollHeight && this.state.onBottom){
            this.setState({onBottom: false})
        } // if at bottom hide scroll to bottom icon
        else if (scrollTop + clientHeight === scrollHeight){
            this.setState({onBottom: true})
        }
    }
    componentWillMount(){
        fetch('/api/messages/retrieve/all') // fetch all messages
        .then(data => data.json())
        .then(res => {
            let {messages} = res;
            this.setState({messages}) // add fetched messages to state
        })
        .catch(err => console.log(err));
    }

    componentDidMount(){
        user.setUsername() // on page opened get username
        setTimeout(()=>{
            funcs.scrollToBottom()
            this.setState({onBottom: true})
        }, 300) // on component is rendered scroll div to bottom

        socket.on('recieve-message', msg => { // listen to socket when msg is recieved
            
            // add message to state and scroll to bottom
            this.setState({messages: this.state.messages.concat(msg)}, funcs.scrollToBottom)
            
        })
    }
    render(){

        return (
            <div id='all-messages-container'>
                
                <div id='all-messages' onScroll={this.onScroll}>
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
                { this.state.onBottom ? (<div></div>) : (
                <div id='scroll-bottom' onClick={this.scroll}>
                    
                    <GrLinkBottom color='rgba(0, 0, 0, 0.80)' size='35px'/>
                </div>
                )}
            </div>
        )
    }
}



export default AllMessages 