import React from 'react';
import {Link} from 'react-router-dom';
import BackgroundImg from "../assets/pizza.jpeg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className='home' style = {{backgroundImage:`url(${BackgroundImg})`}}>
      <div className="headerContainer" >
        <h1>Dewei's food app</h1>
        <p>Pizza catalogue</p>
        <Link to= "/menu">
          <button>PLACE ORDER!!</button>
        </Link>
      </div>

    </div>
  )
}

export default Home