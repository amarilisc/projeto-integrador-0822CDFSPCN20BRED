import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import './Home.css'
import Button from '../../Components/Button/Button'
import { IoCartOutline } from 'react-icons/io5';

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
          {products === undefined ? (
            <p>Carregando...</p>
          ) : (
            products.slice(0, 3).map((product) => (
              <div className="products" key={product.id}>
                <h2>{product.nome}</h2>
                <img src={product.image1} alt="Bolos" />
                <p>{product.descricao}</p>
                <p>R${product.preco},00</p>
                <div className="port__btn-home">
                <Button color="noicon" text="Comprar" icon={<IoCartOutline />}/>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      </div>
    </>
  )
}

export default Home
