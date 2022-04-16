import "./components.css";
import { useState, useContext } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import AuthContext from "../context/AuthContext";

export default function Tip(props) {
  const {user, logout, setNewBalance} = useContext(AuthContext);
  const [bill, setBill] = useState();
  const [code, setCode] = useState();
  const [tip, setTip] = useState(0.05);
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  //console.log('PROPS TO YOU:', props.props);
  const { setAmountToTip, setAboutToTap, setPaymentData} = props.props;


  const onChangeBill = e => {
    setBill(parseFloat(e.target.value));
  };
  const onChangeTip = e => { //set Tip percentage
    setAmountToTip(e.target.value);
    setTip(parseFloat(e.target.value));
  };
  const onChangeCode = e => { //set user code
    setCode(e.target.value);
  };

  const updateBalance = newBalance =>{
    setNewBalance(newBalance);
  }

  const paymentData = {
    bill: bill,
    code: user.code,
    tip: tip
  };

  function onSubmit(e) {
    e.preventDefault();
    setAboutToTap(true);
    setPaymentData(paymentData);
    // axios.put('http://localhost:5000/api/users/tip', paymentData)
    // .then(r => {
    //   updateBalance(r.data.balance)
    //   setCode();
    //   setBill();
      
    // }).catch(err => {
    //   console.log('Error Tipping ', err);
    // });
  }


  return (
    <div id="tip">
      <form onSubmit={onSubmit}>
        <label className="form" htmlFor="rcode">Receiver's Code</label>
        <br />
        <input className="form" onChange={onChangeCode} type="text" enabled='false' value={user.code} />
        <br />
        <br />
        <label className="form" htmlFor="fbill">Full Bill</label>
        <br />
        <input className="form" onChange={onChangeBill} type="number" step="any"/>
        <br />
        <br />
        <label className="form" htmlFor="tips">Choose a tip</label>
        <br/>
        <select className="form" onChange={onChangeTip} className="tips" id="tips">
          <option value="0.05">5%</option>
          <option value="0.1">10%</option>
          <option value="0.15">15%</option>
          <option value="0.2">20%</option>
        </select>
        <br/>
        <br/>
        <input className="submit" type="submit" value="Send" />
      </form>
      <br />
    </div>
  );
}
