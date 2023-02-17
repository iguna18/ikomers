import React, { useState } from 'react';
import productService from '../services/products';
import { StyledGrid } from './styles/ProductGrid.styled';

export const ProductGrid = () => {
  const [products, setProducts] = useState([])
  productService
    .getAllProducts()
    .then(ps => {
      setProducts(ps)
    })
    .catch((error) => {
      console.log(error.message)
    })

  return (
    <StyledGrid>
      {products.map(p => {
        return (
          <div>p.name</div>
        )
      })}
    </StyledGrid>
  )
}