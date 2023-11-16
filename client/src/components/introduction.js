import './introduction.css'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
const Introduction = () =>{
    return ( 
        <div>
            <div id="title">
                    <h3>Room.US - By Amine M. Aouini</h3>
            </div>
            <hr></hr>
            <div id="my-contacts">
                
                <div className='contacts'><FaSquareWhatsapp size={'1.7em'} style={{color: 'green'}}/><span style={{position: 'relative', bottom: '10px'}}>WhatsApp</span></div>
                <div className='contacts'>

                    <TfiEmail size={'1.7em'}/><span style={{position: 'relative', bottom: '10px'}}>Email</span>
                </div>
            
            
                <div className='contacts'>
                    <a href="https://github.com/amineaouini-notbot/"><IoLogoGithub size={'1.7em'}/><span style={{position: 'relative', bottom: '10px'}}>GitHub</span></a>
                </div>
                <div className='contacts'>
                    <a href='https://www.linkedin.com/in/amine-aouini/'><FaLinkedin size={'1.7em'} color='#0077B5'/><span style={{position: 'relative', bottom: '10px'}}>LinkedIn</span></a>
                </div>
                
            </div>
        </div>
    )
}

export default Introduction