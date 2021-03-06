import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css"

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Register = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("61a48ba866acf4f8462bf345");

  const singup = async () => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/regester`, {
        email,
        password,
        role
      });
      console.log(result);
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="desing">
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
      <button onClick={singup}>Regester</button>
      </div>
    </>
  );
};

export default Register;
