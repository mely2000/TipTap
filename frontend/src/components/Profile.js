import "./components.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Profile() {

  let {user, logout} = useContext(AuthContext); //grab global state
  

  return (
  <div id="profile">
    <div>{user.name}
      <div id="code">({user.code})</div>
    </div>
    <input className="logout" type="button" value="Logout" onClick={logout} ></input>
  </div>
  )};
