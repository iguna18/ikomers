import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const style = {backgroundColor:'lightgray',minHeight:'10%',padding:'1%'}
const verticalFlexStyle ={display:'flex',flexDirection:'row',alignItems:'center'}

const AddedToCart = ({id, name, image, quantity, unitPrice, cartLength, cartSum, onClose}) => {
  const navigate = useNavigate()
  return (
    <div>
        <div style={style}>კალათაში დამატება</div>
        <div style={{backgroundColor:'white', display:'flex', flexDirection:'column', padding:'10px'}}>
          <div style={{...verticalFlexStyle, minHeight:'70px', justifyContent:"space-between"}}>
            <img src='/sample.png' style={{width:'50px', marginRight:'10px'}}/>
            <span style={{marginRight:'30px', maxWidth:'350px'}}>{name}</span>
            <span>{quantity} x {unitPrice} ₾</span>
          </div>
          <hr style={{width:'100%', color:'gray'}}/>
          <div style={{...verticalFlexStyle, justifyContent:"space-between"}}>
            <span style={{marginRight:'20px'}}>
              თქვენ გაქვთ {cartLength} ნივთი თქვენს კალათაში
            </span>
            <span>
              ჯამი {cartSum}
            </span>
          </div>
          <div style={{...verticalFlexStyle, justifyContent:"space-between"}}>
            <button onClick={onClose}>განაგრძე შერჩევა</button>
            <button onClick={()=>navigate('/chekout')}>
              ✔ შეკვეთის გაფორმება</button>
          </div>
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