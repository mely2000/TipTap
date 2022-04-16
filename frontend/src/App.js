import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import AuthContext from "./context/AuthContext";

export default function App() {

  let [user, setUser] = useState();

  // Login updates the user data 
  const login = (user) => {
    setUser(() => ({
      isLoggedIn: true,
      name:user.name,
      email: user.email,
      balance: user.balance,
      code: user.code,
    }));
  };

  // Logout updates the user data to empty
  const logout = () => {
    setUser(() => ({
      isLoggedIn : false,
      name:"",
      email: "",
      balance: "",
      code: "",
    }));
  };

  const setNewBalance = (amount) => {
    setUser(() => (
      {
        ...user,
      balance: amount
    }));
  };

  return (
    <AuthContext.Provider value={{user, login, logout, setNewBalance}} >
      <BrowserRouter> 
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
