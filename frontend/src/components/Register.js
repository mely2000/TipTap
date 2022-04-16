import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from './Images/TipTapLogo.png';
import "./components.css";

export default function Register() {

  const axios = require('axios');
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const navigate = useNavigate();

  const onChangeName = e =>{ //set name
    setName(e.target.value);
    console.log(name);
  };
  const onChangeEmail = e => { //set email 
    setEmail(e.target.value);
    console.log(email);
  };
  const onChangePassword = e => { //set password
    setPassword(e.target.value);
    console.log(password);
  };
  const onChangePassword2 = e => {
    setPassword2(e.target.value);
    console.log(password);
  };

  function onSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/register', newUser); //add new user
    navigate("/home");
  }

  const newUser = {
    name: name,
    email: email,
    password: password,
    password2: password2
  };

  return (
    <div class="background">
      <div class="rectangle">
        <img
          src={logo}
          className="Logo"
          alt="Logo"
        />
        <form onSubmit={onSubmit}>
          <label className="form" for="name">Full Name</label>
          <br />
          <input className="form" onChange ={onChangeName} value={name} type="text" id="name" />
          <br />
          <br />
          <label className="form" for="email">E-Mail</label>
          <br />
          <input className="form" onChange={onChangeEmail} value = {email} type="email" id="email" />
          <br />
          <br />
          <label className="form" for="password">Password</label>
          <br />
          <input className="form" onChange={onChangePassword}value = {password} type="password" id="password"/>
          <br />
          <br />
          <label className="form" for="password">Confirm Password</label>
          <br />
          <input className="form" onChange={onChangePassword2} value = {password2} type="password" id="password2" />
          <br />
          <br />
          <input className="submit" type="submit" value="Submit"/>
        </form>
        <br />
        <h>
          <br />
          Already have an account? <Link to="/login">Login Here</Link>
        </h>
      </div>
    </div>
  );
}
