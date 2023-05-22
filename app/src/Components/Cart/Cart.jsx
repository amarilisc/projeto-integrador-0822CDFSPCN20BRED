import React from 'react'
import { Link } from "react-router-dom"

function Cart() {
  return (
    <div className="cart">
        <Link to={`/cart`}>Carrinho</Link>
    </div>
  )
}

export default Cart