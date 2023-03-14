import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { Popup } from './components/Popup';
import { useState, useEffect } from 'react';
import _enum from './enum';
import PopupContents from './components/PopupContents';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [popupContentN, setPopupContentN] = useState(_enum.QUICK_PURCHASE_POPUP);
  const [popupProps, setPopupProps] = useState({})
  const [cart, setCart] = useState({
    idsToQuantities:{},
    sum:0
  })

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('ikomers_cart')) || {
      idsToQuantities:{},
      sum:0
    };
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('ikomers_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id, quantity, unitPrice) => {
    const count = cart.idsToQuantities[id]
    const sum = cart.sum
    setCart({
      idsToQuantities:{...cart.idsToQuantities, [id]:(count||0)+quantity},
      sum: cart.sum + quantity*unitPrice
    })
  }



  let PopupContent =<></>
  switch (popupContentN) {
    case _enum.ADDED_TO_CART_POPUP: 
    PopupContent = PopupContents.AddedToCart
    break;
    case _enum.QUICK_PURCHASE_POPUP:
    PopupContent = PopupContents.QuickPurchase
    break;
    default:
    break;
  }

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsPopupOpen(false)
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey)
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    };
  }, []);

  return (
    <Router>
    <Routes>
    <Route exact path="/" element={
    <div>
      <ProductGrid setIsPopupOpen={setIsPopupOpen} setPopupContentN={setPopupContentN}
        setPopupProps={setPopupProps} addToCart={addToCart}
        />

      { 
        isPopupOpen && 
        <Popup onClose={()=>setIsPopupOpen(false)}>
          <PopupContent {...popupProps} 
            cartLength={Object.values(cart.idsToQuantities).reduce((acc, currq) => acc+currq, 0)} 
            onClose={()=>setIsPopupOpen(false)}
            cartSum={cart.sum}/>
        </Popup>
      }
    </div>
    }/>
    </Routes>
    </Router>
  );
}

export default App;
