import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./components.css";

export default function Balance() {

  const {user} = useContext(AuthContext);

  return (
      <div id="balance">€{user.balance.toFixed(2)}</div> //get user balance
  )}
