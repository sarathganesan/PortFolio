import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Contact = () => {
    
    const form = useRef();
    const [done,setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jj9kned', 'template_w0sjans', form.current, 'mlY9xn7oAn5_D42JV')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;



  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}} >Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}>

                </div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name="name" className="user" placeholder="Name"/>
                <input type="email" name="email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message" />
                <input type="submit" value="Send" className="button" style={{cursor:'pointer'}} />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" style={{background:"var(--purple)"}} >


                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact