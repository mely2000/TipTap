import "./components.css";
import Profile from "./Profile";
import Balance from "./Balance";
import logo from "./Images/TipTapLogo.png"
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


export default function Navbar() {

  return (
    <div id="navbar">
        <Profile /> 
        <img src={logo} id="minilogo" alt="Logo" />
        <Balance />
    </div>
  );
}
