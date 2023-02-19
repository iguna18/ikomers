import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

const styles = {
  PopupOverlay : styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  
  StyledPopup : styled.div`
    background-color: white;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: fit-content;
  `
}

export function Popup(props) {
  return (
    <styles.PopupOverlay>
    <styles.StyledPopup>
      <div style={{position:'absolute', left:'100%',transform:'translateX(-150%)', cursor:'pointer'}}
        onClick={props.onClose}>
        <RxCross2 style={{fontSize:'110%'}}/>
      </div>
      {/* <h1>This is the popup</h1>
      <button onClick={onClose}>Close</button> */}
      {props.children}
    </styles.StyledPopup>
    </styles.PopupOverlay>
  );
}