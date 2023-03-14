import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NumberInput } from './NumberInput';
import _enum from '../enum';
const styles = {
  Item: styled.div`
    padding: 5%;
    position: relative;
    &:hover {
      border: 1px solid;
      box-shadow: 0px 0px 10px;
      z-index: 2;
    }
  `,
  VisibleSection: styled.div`
  `,
  HiddenSection: styled.div`
     ${props => !props.isHovered?'visibility: hidden;':''};
    position: absolute;
    z-index: 2;
    top:100%;
    left: 0;
    background-color: white;
    height: 50px;
    box-shadow: 3px 3px 10px, -3px 3px 10px;
    border-top: 0;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
  `,
  Img: styled.img`
    width: 100%;
  `,
  GreenButton: styled.button`
    background-color: green;
    text-transform: uppercase;
    color: white;
    padding: 0 15%;
    border-radius: 30px;
  `,
  GrayButton: styled.button`
    display: block;
    background-color: lightgray;
    padding: 15%;
    border-radius: 30px;
  `,
  InputDiv: styled.div`
    /* width: 20%; */
    flex: 1;
    /* width:10px; */
    /* position: relative; */
  `,
  InputTypeNumber: styled.input`
    width: 100%;
  `,
  FlexItem:styled.div`
    flex:1;
    max-width:100%; 
    display:grid; 
    place-items:center; 
    /* background-color:red;  */
    height:100%;
  `
}

export const Product = ({ p, onClickAddToCart, onClickQuickPurchase }) => {
  const [quantity, setQuantity] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  const onQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <styles.Item key={p.id}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <styles.VisibleSection>
        <styles.Img className='image' src='/sample.png'/>
        {p.name}
        <hr/>
        {p.description}
      </styles.VisibleSection>
      
      <styles.HiddenSection isHovered={isHovered}>
        <styles.FlexItem>
        <input type='number' style={{width:'60%',height:'60%'}} value={quantity} onChange={onQuantityChange}/>
        </styles.FlexItem>
        <styles.FlexItem>
        <styles.GreenButton onClick={
          parseInt(quantity) > 0 && onClickAddToCart(p, parseInt(quantity), setIsHovered)
        }>შეიძინე</styles.GreenButton>
        </styles.FlexItem>
        <styles.FlexItem>
        <styles.GrayButton onClick={onClickQuickPurchase(p, setIsHovered)}>^</styles.GrayButton>
        </styles.FlexItem>
      </styles.HiddenSection>
    </styles.Item>
  )
}
        
        /* <input type='number' value={quantity} onChange={
          (e) => setQuantity(e.target.value)
        }/> */
        /* <NumberInput value={quantity} setValue={setQuantity}/> */