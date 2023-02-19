import styled from "styled-components";

const style = {backgroundColor:'lightgray',minHeight:'10%',padding:'1%'}

const AddedToCart = ({id, name, image, quantity}) => {
  return (
    <div>
        <div style={style}>კალათაში დამატება</div>
        <div style={{backgroundColor:'white'}}>
          {id}{name}{quantity}
        </div>
    </div>
  )
}
const QuickPurchase = () => {
  return (
    <div>
        <div style={style}>სწრაფი შეძენა</div>
        <h1>This is the popup (QuickPurchase)</h1>
    </div>
  )
}

export default {AddedToCart,QuickPurchase}