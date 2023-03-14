import './ProductGrid.css'
import React, { useEffect, useState } from 'react';
import { Product } from './Product';
import productService from '../services/products';
import _enum from '../enum';


export const ProductGrid = ({setIsPopupOpen, setPopupContentN, setPopupProps, cart, addToCart}) => {
  const onClickAddToCart = (p, quantity, setIsHovered) => (e) => {
    setIsHovered(false)
    setIsPopupOpen(true)
    setPopupContentN(_enum.ADDED_TO_CART_POPUP)
    setPopupProps({
      image:p.image,
      name:p.name,
      id:p.id,
      quantity:quantity,
      unitPrice:p.unitPrice
    })
    addToCart(p.id, quantity, p.unitPrice)
    // setTimeout(()=>{
    //   setIsPopupOpen(false)
    // }, 3500)
  }
  const onClickQuickPurchase = (p, setIsHovered) => (e) => {
    setIsHovered(false)
    setIsPopupOpen(true)
    setPopupProps({
      image:p.image,
      name:p.name,
      id:p.id
    })
    setPopupContentN(_enum.QUICK_PURCHASE_POPUP)
  }
  const popupActions = {
    onClickAddToCart, onClickQuickPurchase
  }
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
      { products.map(p => <Product p={p} key={p.id} {...popupActions}/>) }
    </div>
  )
}