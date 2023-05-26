import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:1234/products/${id}`)
        const data = response.data;
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    };

    fetchProduct()
  }, [id])

  if (!product) {
    return <p>Carregando...</p>
  }

  return (
    <div className="product">
      <h1>{product.nome}</h1>
      <img src={product.image1} alt={product.nome} />
      <p>{product.descricao}</p>
    </div>
  );
}

export default Product;