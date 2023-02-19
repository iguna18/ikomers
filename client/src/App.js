import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { Popup } from './components/Popup';
import { useState } from 'react';
import _enum from './enum';
import PopupContents from './components/PopupContents';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [popupContentN, setPopupContentN] = useState(_enum.QUICK_PURCHASE_POPUP);
  const [popupProps, setPopupProps] = useState({})
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

  return (
    <div>
      <ProductGrid setIsPopupOpen={setIsPopupOpen} setPopupContentN={setPopupContentN}
        setPopupProps={setPopupProps}
      />

      { 
        isPopupOpen && 
        <Popup onClose={()=>setIsPopupOpen(false)}>
          <PopupContent {...popupProps}/>
        </Popup>
      }
    </div>
  );
}

export default App;
