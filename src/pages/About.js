import React from 'react';
import MultiplePizza from "../assets/multiplePizzas.jpeg";
import "../styles/About.css"

const About = () => {
  return (
    <div className='about'>
        <div 
        className="aboutTop"
        style = {{backgroundImage:`url(${MultiplePizza})`}}
        >
        
        </div>
        <div className="aboutBottom">
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati et hic enim voluptas sunt deserunt cupiditate, iusto fugiat magni?
          </p>
        </div>

    </div>
  )
}

export default AboutW