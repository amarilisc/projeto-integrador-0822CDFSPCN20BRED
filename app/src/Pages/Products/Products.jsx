import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';
import ProductCard from '../../Components/ProductCard/ProductCard';


function Products() {
  const url = 'http://localhost:1234/products';

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="Products">
        <div className="container">
          <div className="title">
            <h1>Escolha seu bolo</h1>
          </div>
        </div>
        <div className="card">
          {products === undefined ? (
            <p>Carregando...</p>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} price={product.preco} showIcon={true} buttonText="Comprar" />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Products;