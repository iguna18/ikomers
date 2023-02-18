import React, { useState } from 'react';
import styled from 'styled-components';
import { NumberInput } from './NumberInput';

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
  // ${props => props.isHovered?'display: block;':'display: none'};
  HiddenSection: styled.div`
    display: none;
    position: absolute;
    z-index: 2;
    top:100%;
    left: 0;
    background-color: white;
    height: fit-content;
    box-shadow: 3px 3px 3px, -3px 3px 3px;
    border-top: 0;
    display: flex;
    width: 100%;
    background-color: black;
  `,
  Img: styled.img`
    width: 100%;
  `,
  GreenButton: styled.button`
    background-color: green;
    text-transform: uppercase;
    flex: 5;
  `,
  GrayButton: styled.button`
  display: block;
    background-color: lightgray;
    flex: 5;
  `,
  InputDiv: styled.div`
    /* width: 20%; */
    flex: 1;
    /* width:10px; */
    /* position: relative; */
  `
}

export const Product = ({ p }) => {
  const [quantity, setQuantity] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <styles.Item key={p.id}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <styles.VisibleSection>
        <styles.Img className='image' src='/sample.png'/>
        {p.name}
        <hr/>
        {p.description}
      </styles.VisibleSection>
      
      <styles.HiddenSection isHovered={false}>
        <styles.InputDiv>
          
          <NumberInput value={quantity} setValue={setQuantity}/>
        </styles.InputDiv>
        <styles.GrayButton>^</styles.GrayButton>
        <styles.GreenButton>შეიძინე</styles.GreenButton>
      </styles.HiddenSection>
      
    </styles.Item>
  )
}