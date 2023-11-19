import './introduction.css'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
const Introduction = () =>{
    
    let [isNumCopied, onNumCopied] = useState(false) 
    let onClickWhatsApp = () => {
        navigator.clipboard.writeText('216-26-115-971')
        onNumCopied(true)
        setTimeout(()=>{onNumCopied(false)}, 1500)   
    }
    const overlayWhats = (props) => (
        <Tooltip className='overlays' id="num-overlay" {...props}>
          {isNumCopied ? 'Copied' : '216-26-115-971'}
        </Tooltip>
      );
      let [isEmailCopied, onEmailmCopied] = useState(false) 
      let onClickEmail = () => {
        navigator.clipboard.writeText('amine.m.aouini@hotmail.com')
          onEmailmCopied(true)
          setTimeout(()=>{onEmailmCopied(false)}, 1500)   
      }
      const overlayEmail = (props) => (
          <Tooltip className='overlays' id="email-overlay" {...props}>
            {isEmailCopied ? 'Copied' : 'amine.m.aouini@hotmail.com'}
          </Tooltip>
        );
    return ( 
        <div>
            <div id="title">
                    <h3>Room.US - By Amine M. Aouini</h3>
            </div>
            <hr></hr>
            <div id="my-contacts">

                <OverlayTrigger placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={overlayWhats}
                    >
                    <div className='contacts' onClick={onClickWhatsApp}>
                        <FaSquareWhatsapp size={'1.7em'} style={{color: 'green'}}/><span style={{position: 'relative'}}>WhatsApp</span>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={overlayEmail}
                    >
                    <div onClick={onClickEmail} className='contacts'>

                        <TfiEmail size={'1.7em'}/><span style={{position: 'relative'}}>Email</span>
                    </div>
                </OverlayTrigger>
            
                <div className='contacts'>
                    <a href="https://github.com/amineaouini-notbot/" target="_blank" rel='noreferrer'><IoLogoGithub size={'1.7em'}/><span style={{position: 'relative'}}>GitHub</span></a>
                </div>
                <div className='contacts'>
                    <a href='https://www.linkedin.com/in/amine-aouini/' target="_blank" rel='noreferrer'><FaLinkedin size={'1.7em'} color='#0077B5'/><span style={{position: 'relative'}}>LinkedIn</span></a>
                </div>
                
            </div>
        </div>
    )
}

export default Introduction