import '../App.css';
import * as React from 'react';
import Nav from './nav';
import {Link} from 'react-router-dom';
import logo from "../images/logo20.png";
import { FiShoppingCart } from "react-icons/fi";

const Header = ({cart }) => {

  return (
    <header className = 'App-header'>
      <Link to='/'>
        <img src={logo} alt ='logo'/>
      </Link>
      < Nav />
      <Link to='/cart'><FiShoppingCart/><span>{cart.length? cart.length:''}</span></Link>
    </header>
  )
}

export default Header