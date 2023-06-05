import React from 'react'
import { Link } from "react-router-dom"
import fofelhoslogo from '../../assets/fofelhoslogo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cartSlice'

function Navbar() {
  const {quantidade} = useSelector(selectCart)
  return (
    <div className="navbar">
      <div className="left">
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/products`}>Menu</Link>
          </li>
        </ul>
      </div>
      <div className="center"></div>
      <img src={ fofelhoslogo } alt="Fofelhos logo" />
      <div className="block2">
        <ul>
          <li>
            <Link to={`/about`}>Sobre</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contato</Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <Link to={`/`}>
          <ShoppingCartIcon color='#FF7BAC'/>
          {quantidade}
        </Link>
      </div>
    </div>
  )
}

export default Navbar