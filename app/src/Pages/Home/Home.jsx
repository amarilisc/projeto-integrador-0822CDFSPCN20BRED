import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import './Home.css'

function Home() {

  const url = 'http://localhost:1234/products'
  
  const [products, setProducts] = useState([])

  const getProducts = async() => {
    try {
      const response = await axios.get(url)
      
      const data = response.data
      
      setProducts(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getProducts()

  }, [])
  

  return (
    <>
    <div className="home">
      <div className="container">
        <div className="title">
          <h1>Novos Produtos</h1>
        </div>
        <div className="card">
        {products.length === 0 ? (<p>Carregando...</p>) : (
          products.map((products) => (
            <div className="products" key={products.id}>
              <h2>{products.nome}</h2>
              <img src={products.image1} alt="Bolos" />
              <p>{products.descricao}</p>
              <p>R${products.preco},00</p>
              <button className='addToCartBttn'>Comprar</button>
            </div>
          ))
        )}</div>
      </div>
    </div>
    </>
  )
}

export default Home
