// import { useState } from "react" 
import './room.css'
import Input from './input'
import AllMessages from './allMessages'
import Introduction from './introduction.js'
const Room = ()=>{
    // let [state, ]

    return (
        <div id="room">
            <Introduction></Introduction>
            <hr style={{width: '90%', marginLeft: '5%'}}></hr>
            <AllMessages></AllMessages>
            <hr></hr>
            <Input></Input>
        </div>
    )
}

export default Room