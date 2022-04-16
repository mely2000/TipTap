import React, {useEffect, useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import "./components.css";
import logo from './Images/TipTapLogo.png';
import AuthContext from "../context/AuthContext";

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login, logout} = useContext(AuthContext);

  const navigate = useNavigate();

  const onChangeEmail = e => { 
    setEmail(e.target.value); //sets email
  };
  const onChangePassword = e => {
    setPassword(e.target.value); //sets password
  };
  

  const userData = {
    email: email,
    password: password
  };

  function onSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', userData) //checks email and password
    .then(response => {
      if(response.data){
        login({...response.data});
        navigate("/home");
      }
      
    }).catch( err => {
      logout();
      console.log('Invalid Login ', err);
    });
    
  }

  return (
    <div className="background">
      <div className="rectangle">
        <img
          src={logo}
          className="Logo"
          alt="Logo"
        />
        <form onSubmit={onSubmit} >
          <label className="form" htmlfor="email">E-Mail</label>
          <br />
          <input className="form" onChange={onChangeEmail}type="email" id="email" />
          <br />
          <br />
          <label className="form" htmlfor="password">Password</label>
          <br />
          <input className="form" onChange={onChangePassword} type="password" id="password"/>
          <br />
          <br />
          <input className= "submit" type="submit" value="Log In" />
        </form>
        <br />
        <br />
        <h>
          {/* <Link to="/home">Home</Link> */}
          Don't have an account? <Link to="/register">Register Here</Link>
        </h>
      </div>
    </div>
  );
}
