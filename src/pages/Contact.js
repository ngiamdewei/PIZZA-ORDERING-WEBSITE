import React from 'react';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div 
        className="leftSide"
        style = {{backgroundImage:`url(${PizzaLeft})`}}
        ></div>
        <div 
        className="rightSide"
        >
            <h1>Contact us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Full name</label>
                <input type="text" placeholder='Enter full name...' name='name'/>
                <label htmlFor='email'>Email</label>
                <input type="email" placeholder='Enter email...' name='email'/>
                <label htmlFor='message'>Message</label>
                <textarea name="message" placeholder='Enter message...'  rows="6" required ></textarea>
                <button type='submit'>Send Message</button>
            </form>

        </div>

    </div>
  )
}

export default Contact