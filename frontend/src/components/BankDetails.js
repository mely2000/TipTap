import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./components.css";
import logo from "./Images/Logo.png"
import axios from "axios";

export default function BankDetails(props) {
const {user, setNewBalance} = useContext(AuthContext); //global state

const {setAboutToTap } = props.props; //flag to return to main page

let [paymentData, setPaymentData] = useState(props.props.paymentData)

let [tipAmount, setTipAmount] = useState((paymentData.bill * paymentData.tip).toFixed(2)); //calculate tip

  function onSubmit(e) {
    e.preventDefault();
    axios.put('http://localhost:5000/api/users/tip', paymentData) //api call
    .then(r => {
        setNewBalance(r.data.balance)
        setAboutToTap(false);
        
    }).catch(err => {
      console.log('Error Tipping ', err);
    });
  }

  function undoTap(){
    setAboutToTap(false);
  }

  const overRideTipAmount = e => {
    setTipAmount(parseFloat(e.target.value));
    setPaymentData({
        ...paymentData,
        overRideAmount: parseFloat(e.target.value)
    })
    console.log('PD: ', paymentData);
  }

  return (
    <div className="background">
      <div className="rectangle">

      <form onSubmit={onSubmit} >
        
        <br/>
        <label className="form" htmlfor="valueInput">TIP AMOUNT FOR {user.name} :</label>        
        <br/>
        <br/>
        <input type='number' step="any" id="valueInput" onChange={overRideTipAmount} value={tipAmount} />
        <br/>
        <br/>
        <input id="tap" type="submit" value="TAP TO TIP" />
        <br/>
        <br/>
        <input type="button" onClick={undoTap} value="Go Back" />
      </form>
      
    </div>
  </div>
    
  )}
