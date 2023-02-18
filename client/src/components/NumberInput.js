import React, { useEffect, useState } from 'react';
import productService from '../services/products';
import styled from 'styled-components';

const styles = {
  Div: styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    position: block;
  `,
  Input: styled.input``,
  Button: styled.button`
    flex:1;
    /* width: 100%; */
    background-color: white;
    display: block  ;
    border-width: 1px;
    border-color: gray;
    color: gray;
    &:hover {
      color: black;
      cursor: pointer;
    }
  `
}

export const NumberInput = ({ value, setValue }) => {
  const handleChange = (event) => {
    const input = event.target.value
    if(/^\d*$/.test(input)) {
      setValue(event.target.value)
    }
  }
  const inc = () => {
    setValue(parseInt(value?value:'0')+1)
  }
  const dec = () => {
    if(value == '0')
      return
    if(value == '') {
      setValue('0')
      return
    }
    setValue(parseInt(value?value:'0')-1)
  }
  return (
    <styles.Div>
      <styles.Input type='text' value={value} onChange={handleChange}/>
      <div>
        <styles.Button onClick={inc}>+</styles.Button>
        <styles.Button onClick={dec}>-</styles.Button>
      </div>
    </styles.Div>
   )
}