import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/Add';
const Navbar = () => {
  return (
    <div className="nav">
    <div className="nav__top">
      <div className="container nav__top">
        <div className="nav__top__left">
          <AiOutlineTwitter />
          <GrFacebookOption />
          <FiInstagram />
          <FaLinkedinIn />
        </div>
        <div className="nav__top__right">
          <button>Sponsor</button>
          <button>Login</button>
          <button><Link>Wishlist</Link></button>
        </div>
      </div>
    </div>
    <div className="nav__bottom">
      <div className="container nav__bottom">
        <div className="nav__bottom__left">A D O P T E D</div>
        <div className="nav__bottom__right">
          <ul>
          <li>
              <Link to="/add" element={<Add/>}>Add</Link>
            </li>
            <li>
              <Link to="/" element={<Home/>}>Home</Link>
            </li>
            <li>
              <a href=""></a>Adoption
            </li>
            <li>
              <a href=""></a>Succes Stories
            </li>
            <li>
              <a href=""></a>About
            </li>
            <li>
              <a href=""></a>Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar
