import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import ProductCard from '../../Components/ProductCard/ProductCard';


function Home() {
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
      <div className="home">
        <div className="container">
          <div className="title">
            <h1>Novos Produtos</h1>
          </div>
        </div>
        <div className="card">
          {products === undefined ? (
            <p>Carregando...</p>
          ) : (
            products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} price={product.preco} buttonText="Saiba mais" />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
