import { useState } from 'react'
import funcs from './funcs'
const Input = ()=>{
    const [input, changeInput] = useState("")

    return(
        <div id='input'>
            
            <input type='text' onChange={e => changeInput(e.target.value)}></input>
            <button id='send'>Send</button>
        </div>
    )
}


export default Input;