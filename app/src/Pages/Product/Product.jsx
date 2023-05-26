import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Box, Button, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
      <Box width="50%" m="80px auto" display="flex" flexDirection="row">
        <Box flex="1 1 40%" mb="40px" display="flex" justifyContent="center" alignItems="center">
          <img
            alt={product.nome}
            width="100%"
            height="100%"
            src={product.image1}
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box flex="1 1 60%" m="65px 0 25px 0">
          <Typography
            sx={{
              fontFamily: 'Comfortaa',
              fontSize: 24,
              fontWeight: 'bold',
              color: '#4F0909',
            }}
          >
            {product.nome}
          </Typography>
          <Typography
          sx={{
            fontFamily: 'Comfortaa',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#4F0909',
          }}>R${product.preco},00</Typography>
          <Typography sx={{ mt: "20px", fontFamily: 'Comfortaa',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#4F0909' }}>
            {product.descricao}
          </Typography>

          <Button
            component={Link}
            to={`/product/${product.id}`}
            sx={{
              backgroundColor: '#FF7BAC',
              color: 'white',
              borderRadius: 10,
              minWidth: '150px',
              '&:hover': { backgroundColor: '#EA4E8D' },
              padding: '10px 40px',
              mt: '20px',
            }}
            endIcon={<AddShoppingCartIcon />}
          >
            Comprar
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Product;
