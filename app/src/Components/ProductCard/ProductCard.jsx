import React from 'react'
import './ProductCard.css'

import { Link } from 'react-router-dom';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductCard({ product, buttonText, price, showIcon }) {
  return (
    <div className="products" key={product.id}>
      <Card sx={{ height: '100%', boxShadow: 'none' }}>
        <CardMedia
          sx={{
            height: 150,
            objectFit: 'cover',
            transition: 'transform 0.3s',
            transform: 'scale(1)',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          image={product.image1}
          title="Bolos"
        />
        <CardContent>
          <Typography
            component="div"
            className={'title-card'}
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
            className={'text-card'}
            sx={{
              textAlign: 'justify',
              color: '#4F0909',
              fontFamily: 'Comfortaa',
            }}
          >
            {product.descricao}
          </Typography>
          <Typography className={'text-price'}
            sx={{
              textAlign: 'justify',
              color: '#4F0909',
              fontFamily: 'Comfortaa',
            }}>
                R$ {price},00
            </Typography>
        </CardContent>

        <CardActions>
          <Grid container justifyContent="center">
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
              }}
              endIcon={showIcon && <AddShoppingCartIcon />}
            >
              {buttonText}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductCard;
