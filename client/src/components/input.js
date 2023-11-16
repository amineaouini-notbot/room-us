import { useState } from 'react'
const Input = ()=>{
    const [input, changeInput] = useState("")

    return(
        <div id='input'>
            <hr></hr>
            <input type='text' onChange={e => changeInput(e.target.value)}></input>
            <button id='send'>Send</button>
        </div>
    )
}

export default Input;