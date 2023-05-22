import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import './Products.css'
import Button from '../../Components/Button/Button'
import { IoCartOutline } from 'react-icons/io5';

function Products() {
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
    <div className="about">
      <div className="container">
        <div className="title">
          <h1>Nossos Produtos</h1>
        </div>
        <div className="card">
        {products.length === 0 ? (<p>Carregando...</p>) : (
          products.map((products) => (
            <div className="products" key={products.id}>
              <img src={products.image1} alt="Bolos" />
              <h2>{products.nome}</h2>
              <p>{products.descricao}</p>
              <p>R${products.preco},00</p>
              <div className="port__btn-prc">
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

export default Products