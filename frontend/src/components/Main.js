import "./components.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Tip from "./Tip";
import {React, useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import Login from "./Login";
import BankDetails from "./BankDetails";



export default function Main() {
  let {user} = useContext(AuthContext);


  let [aboutToTap, setAboutToTap] = useState(false); //flag BankDetails
  let [amountToTip, setAmountToTip] = useState(0);
  let [paymentData, setPaymentData] = useState();

  let tipFuncs = {setAmountToTip, setAboutToTap, setPaymentData};
  let bankProps = {setAboutToTap, paymentData};

  console.log('AMT TO TIP:', amountToTip);

  if(user && user.isLoggedIn){
    if(!aboutToTap){
      return ( //mainpage
        <div class="background"> 
          <div className="rectangle">
            <Navbar />
            <Tip props={tipFuncs} />
          </div>
        </div>
      );
    } else {
      return <BankDetails props={bankProps} />
    }
  } else{
    return(
      <Login />
    )
  }
}
