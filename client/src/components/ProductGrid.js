import './ProductGrid.css'
import React, { useEffect, useState } from 'react';
import { Product } from './Product';
import productService from '../services/products';

export const ProductGrid = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    productService
      .getAllProducts()
      .then(ps => {
        setProducts(ps)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])
  return (
    <div className='grid'>
      { products.map(p => <Product p={p} key={p.id}/>) }
    </div>
  )
}