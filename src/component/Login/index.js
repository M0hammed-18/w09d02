import React from 'react'
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
 const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[check,setCheck]=useState();

  useEffect(()=>{
    const token= localStorage.getItem("token")
    setCheck(token)
  },[])

  
  const login = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      console.log(result.data.token);
      localStorage.setItem("token",result.data.token)
    } catch (err) {
      console.log(err);
    }

    

    navigate('/tasks')
  };
    return (
        <div>
            <h2>Login Page </h2>
            <input
        type="email"
        name="email"
        placeholder="enter email "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="enter password "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
